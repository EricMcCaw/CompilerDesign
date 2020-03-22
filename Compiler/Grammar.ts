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



    getNullable() {
        let nullable: Set<string> = new Set();
        for (let i = 0; i < this.nonTerminals.length; i++) {
            if (this.nonTerminals[i].nullable(this.nonTerminals, this.terminals)) {

                nullable.add(this.nonTerminals[i].leftSide);
            }

        }
        return nullable;

    }
    
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
                let temparray = this.rightSide[i].split(" ")
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
