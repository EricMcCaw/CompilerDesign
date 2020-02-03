
import { Token } from "./Token"
import { Tokenizer } from "./Tokenizer"



export function parse(input: string): TreeNode
{
    operatorStack: Array<TreeNode>();
    operandStack: Array<TreeNode>();

    while (!tokenizer.atEnd()){
        let t = tokenizer.next();
        let sym = t.sym;
        if (sym == NUM || ID){
            operandStack.push(Node(t.sym, t.lexeme));
        }
        else {
            while (true){ 
                if (operatorStack.empty())
                    break;
                let A = operatorStack.top().sym
                if (precedence[A] >= precedence[sym])
                    doOperation();
                else
                    break;
            }
            operatorStack.push(Node(t.sym, t.lexeme));
        }
    }
    while (!operatorStack.empty())
        doOperation();




}
let operators = {
    "POWOP": 3,
    "MULOP": 2,
    "ADDOP": 1
}


class TreeNode {
    sym: string;
    token: Token;
    children: TreeNode[];
    constructor(sym: string, token: Token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
}

function doOperation(){
    let c1 = operandStack.pop()
    let c2 = operandStack.pop()
    let opNode = operatorStack.pop()
    opNode.addChild(c2)
    opNode.addChild(c1)
    operandStack.push(opNode)
}


