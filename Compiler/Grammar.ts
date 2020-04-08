import { isNullOrUndefined } from "util";



export class Grammar
{
    grammarSet: Set<string> = new Set();
    terminals: Array<Terminal> = new Array();
    nonTerminals: Array<NonTerminal> = new Array();
    nodeList: Array<NodeType> = new Array();
    startingNode: string;
    constructor(input: string) {
        let newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
      
        this.terminals.push(new Terminal("WHITESPACE", /\s+/gy));
        let swapped = false;
        for (let i = 0; i < newInput.length-1;i++) {
            rex.lastIndex = 0;
            if (newInput[i].length <= 1) {
                swapped = true;
                continue;
            }
            let output = rex.exec(newInput[i]);
            let name: string;
            let newRex: string;
            if (output ) {
                name = output[1];
                newRex = output[3];
            }
            else {
                throw new Error("invalid structure");
            }
            if (this.grammarSet.has(name)) {
                throw new Error("conflicting regex");
            }
            else {
                if (!swapped) {
                    try {
                        
                        let testRex = new RegExp(newRex, "gy");
                        this.grammarSet.add(name.replace(/\s/g, ''));
                        this.terminals.push(new Terminal(name.replace(/\s/g, '').trim(), testRex));
                        
                    }
                    catch{
                        throw new Error("this regex sucks");
                    }
                }
                else {
                    try {
                        
                        this.grammarSet.add(name.replace(/\s/g, ''));
                        this.nonTerminals.push(new NonTerminal(name.replace(/\s/g, ''), newRex));
                        
                    }
                    catch{
                        throw new Error("this regex sucks");
                    }
                }
                
            }
        }
        this.grammarSet.forEach(name => this.nodeList.push(new NodeType(name)));
        
        for (let i = 0; i < this.nonTerminals.length; i++) {
            let currentNode: NodeType;
            this.nodeList.forEach(elem => {
                if (elem.label == this.nonTerminals[i].leftSide ){
                    currentNode = elem;
                }
            })
            if (currentNode == null) {
                throw new Error("we have a problem jimbo");
            }

            let TempArray = this.nonTerminals[i].rightSide
            let tempstring: string;
            tempstring = TempArray.join('');
            TempArray = tempstring.split(" ");
            TempArray.forEach(elem => {
                let found = false;
                if (elem != '') {
                    this.nodeList.forEach(node => {
                        if (node.label == elem) {
                            if (!currentNode.nodeList.includes(node)) {
                                currentNode.nodeList.push(node);
                            }
                            
                            found = true;
                        }
                        
                    })
                    //if (!found) {
                    //    throw new Error("honestly its not good that we even made it here");
                    //}
                }
            })
        }
       
        let start:NodeType = findNode(this.nonTerminals[0].leftSide, this.nodeList);

        if (start.label == "NULL") {
            throw new Error("Should have found this bug before now");
        }
        
        let visitedSet: Set<string> = new Set();
        dfs(start, visitedSet);
        if (visitedSet.size != this.nodeList.length) {
           // throw new Error("not everything was visited");
            

        }
    }


    getFollow(): Map<string, Set<string>> {
        let follow: Map<string, Set<string>> = new Map();
        let prevfollow: Map<string, Set<string>> = new Map();
        let first: Map<string, Set<string>> = this.getFirst();
        let nullables: Set<string> = this.getNullable();
        //console.log("nullables", nullables);
        follow.set(this.nonTerminals[0].leftSide, new Set("$"));

        for (let i = 0; i <= this.nonTerminals.length; i++) {
            if (i == this.nonTerminals.length) {
                i = 0;

                if (dictionariesAreSame(prevfollow, follow)) {
                    break;
                }
                prevfollow = new Map(follow);

            }
            let N = this.nonTerminals[i];

            for (let j = 0; j < N.rightSide.length; j++) {
                let P = N.rightSide[j];
                if (P.split(" ").length > 1) {
                    let temp = P.split(" ");

                    for (let place = 0; place < temp.length; place++) {
                        let x = temp[place];
                       
                        if (this.findNonTerminal(x, this.nonTerminals) != null) {
                            let broke = false;
                            for (let t = 1; t < temp.length - place; t++) {
                                let y = temp[place + t]
                                follow.set(x, union(follow.get(x), first.get(y)));
                                if (!nullables.has(y)) {
                                    broke = true;
                                    break;
                                }                          
                            }
                            if (!broke) {
                                follow.set(x, union(follow.get(N.leftSide), follow.get(x)));
                            }

                        }
                        

                    }

                }
                else {
                  
                    if (this.findNonTerminal(P, this.nonTerminals) != null) { 
                        follow.set(P, union(follow.get(N.leftSide), follow.get(P)));

                    }

                }

            }

        }
        
        
        return follow;
    }
    getFirst(): Map<string, Set<string>> {
        let first: Map<string, Set<string>> = new Map();
        let prevFirst: Map<string, Set<string>> = new Map();
        let nullables: Set<string> = this.getNullable();
        for (let i = 0; i < this.terminals.length; i++) {
            if (this.terminals[i].sym != "WHITESPACE") {
                let tempSet: Set<string> = new Set();
                tempSet.add(this.terminals[i].sym);
                first.set(this.terminals[i].sym, tempSet);
            }

        }

        for (let i = 0; i <= this.nonTerminals.length; i++) {
            if (i == this.nonTerminals.length) {
                i = 0;
                
                if (dictionariesAreSame(prevFirst, first)) {
                    break;
                }
                prevFirst = new Map(first);

            }
            let N = this.nonTerminals[i];
            
            for (let j = 0; j < N.rightSide.length; j++) {
                let P = N.rightSide[j];
                if (P.split(" ").length > 1) {        
                    let temp = P.split(" ");
                    if (temp[0] == N.leftSide) {
                        continue;
                    }
                    if (this.findNonTerminal(temp[0], this.nonTerminals) != null) {
                        let nonright = this.findNonTerminal(temp[0], this.nonTerminals).rightSide;
                        let isLam = false;
                        for (let ind = 0; ind < nonright.length; ind++) {
                            if (nonright[ind] == 'lambda') {
                                isLam = true;
                                break;
                            }
                        }
                        if (isLam) {
                            first.set(N.leftSide, union(first.get(N.leftSide), first.get(temp[1])));
                        }
                    }
                    first.set(N.leftSide, union(first.get(N.leftSide), first.get(temp[0])));
                    
                    if (nullables.has(temp[0])) {
                        break;

                    }

                }
                else {
                    first.set(N.leftSide, union(first.get(N.leftSide), first.get(P)));
                }
            

            }
            
        }

        return first

    }


    getNullable(): Set<string> {
        let nullable: Set<string> = new Set();
        for (let i = 0; i < this.nonTerminals.length; i++) {
            if (this.nonTerminals[i].nullable(this.nonTerminals, this.terminals)) {
                nullable.add(this.nonTerminals[i].leftSide);
            }

        }
        return nullable;

    }

    findNonTerminal(name: string, array: Array<NonTerminal>): NonTerminal {
        for (let i = 0; i < array.length; i++) {

            if (array[i].leftSide == name) {
                return array[i];
            }

        }
        return null;

    }
    
}





function dictionariesAreSame(s1: Map<string, Set<string>>, s2: Map<string, Set<string>>) {
    let M1 = s1;
    let M2 = s2;

    let k1: string[] = [];
    let k2: string[] = [];
    for (let k of M1.keys())
        k1.push(k);
    for (let k of M2.keys())
        k2.push(k);
    k1.sort();
    k2.sort();
    if (!listsEqual(k1, k2)) {
        //console.log("keys not equal:", k1, k2);
        return false;
    }
    for (let k of k1) {
        if (!listsEqual(M1.get(k), M2.get(k))) {
            //console.log("Lists not equal on key ", k, " : Expected: ", M1.get(k), "what you gave", M2.get(k));
            return false;
        }
    }
    return true;
}

function listsEqual(L1a: any, L2a: any) {
    let L1: string[] = [];
    let L2: string[] = [];
    L1a.forEach((x: string) => {
        L1.push(x);
    });
    L2a.forEach((x: string) => {
        L2.push(x);
    });

    L1.sort();
    L2.sort();
    if (L1.length !== L2.length)
        return false;
    for (let i = 0; i < L1.length; ++i) {
        if (L1[i] !== L2[i])
            return false;
    }
    return true;
}

function union(setA: Set<string>, setB:Set<string>) {
    let _union = new Set(setA)
    if (!isNullOrUndefined(setB)) {
        let myArr = Array.from(setB)
        for (let elem of myArr) {
            _union.add(elem)
        }
    }
    return _union
}


class Terminal{
    sym: string;
    rex: RegExp;

    constructor(Sym: string, Rex: RegExp) {
        this.sym = Sym;
        this.rex = Rex;

    }
    
}

class NonTerminal {
    leftSide: string;
    rightSide: Array<string>;
    isNullable: boolean;
    constructor(left: string, right: string) {
        this.leftSide = left.trim();
        this.rightSide = right.split('|')
        this.isNullable = null;
        for (let i = 0; i < this.rightSide.length; i++) {
            this.rightSide[i] = this.rightSide[i].trim();

        }
    }

    onRightside(check: string) {
        for (let i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i].split(" ").length > 1) {
                let temp = this.rightSide[i].split(" ");
                for (let j = 0; j < temp.length; j++) {
                    if (temp[j] == check) {
                        return true;
                    }
                }

            }
            else {
                if (this.rightSide[i] == check) {
                    return true;
                }
            }

        }   
        return false;
    }


    nullable(arr: Array<NonTerminal>, termarr: Array<Terminal>): boolean {
        if (this.isNullable != null) {
            return this.isNullable;
        }
        for (let i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i] == 'lambda') {
                this.isNullable = true;
                return true;
            }
        }
        for (let i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i].indexOf(" ") > -1) {
                let temparray = this.rightSide[i].split(" ");
                let temp = false;
                for (let num = 0; num < temparray.length; num++) {
                    if (this.findTerminal(temparray[num], termarr) != null) {
                     
                        temp = true;
                    }
                }
                
                for (let num = 0; num < temparray.length; num++) {
                    if (!temp) {
                        if (this.findNonTerminal(temparray[num], arr) != null && this.findNonTerminal(temparray[num], arr) != this) {

                            if (temparray.every(elem => this.findNonTerminal(elem, arr).nullable(arr, termarr))) {
                                this.isNullable = true;

                                return true
                            }
                        }

                    }
                    else {
                        break;
                    }
                }
                    
            }
            
            else {
                if (this.findNonTerminal(this.rightSide[i], arr) != null) {
                    if (this.findNonTerminal(this.rightSide[i], arr).nullable(arr,termarr)) {
                        this.isNullable = true;
                        return true;
                    }
                }
            }
        }
        this.isNullable = false;
        return false;

    }
    findTerminal(name: string, array: Array<Terminal>): Terminal {
        for (let i = 0; i < array.length; i++) {
            if (array[i].sym == name) {
                return array[i];
            }

        }
        return null;

    }
    findNonTerminal(name: string, array: Array<NonTerminal>): NonTerminal {
        for (let i = 0; i < array.length;i++) {

            if (array[i].leftSide == name) {
                return array[i];
            }

        }
        return null;

    }
}

class NodeType {

    label: string;
    nodeList: NodeType[];

    constructor(label: string) {
        this.label = label;
        this.nodeList = [];

    }
}
function dfs(currNode: NodeType, visited: Set<string>) {
    
    visited.add(currNode.label);
    currNode.nodeList.forEach((nextNode: NodeType) => {
        
        if (!visited.has(nextNode.label))
            dfs(nextNode, visited);
    });
}
function findNode(name: string, nodeList: Array<NodeType>): NodeType {
    let found = false;
    let tempNode: NodeType;
    nodeList.forEach(node => {

        if (node.label == name) {
            
            found = true;
            tempNode = node;
        }

    })
    
    if (!found) {
        return new NodeType("NULL");
    }
    else
        return tempNode;
}
