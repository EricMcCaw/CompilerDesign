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
                        this.terminals.push(new Terminal(name.replace(/\s/g, ''), testRex));
                        
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

            let TempArray = this.nonTerminals[i].rightSide.split("|");
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
    rightSide: string;

    constructor(left: string, right: string) {
        this.leftSide = left;
        this.rightSide = right;
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
