import { Tokenizer } from "./Tokenizer"
import { Grammar } from "./Grammar"
//import {TreeNode} from "./shuntingyard"

declare var require: any;
let fs = require("fs");
let antlr4 = require('./antlr4')
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser

export function parse(input: string) {

    //console.log(Lexer);
    let stream = new antlr4.InputStream(input);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners()
    parser.addErrorListener(handler);


    let antlrroot = parser.program();
    
    let root: TreeNode = walk(parser, antlrroot);
    return root;

    function walk(parser: any, node: any) {
        let p: any = node.getPayload();
        if (p.ruleIndex === undefined) {
            let line: number = p.line;
            let lexeme: string = p.text;
            let ty: number = p.type;
            let sym: string = parser.symbolicNames[ty]
            if (sym === null)
                sym = lexeme.toUpperCase();
            let T = new Token(sym, line, lexeme)
            return new TreeNode(sym, T)
        } else {
            let idx: number = p.ruleIndex;
            let sym: string = parser.ruleNames[idx]
            let N = new TreeNode(sym, undefined)
            for (let i = 0; i < node.getChildCount(); ++i) {
                let child: any = node.getChild(i)
                N.children.push(walk(parser, child));
            }
            return N;
        }
    }


}

class Token {
    sym: string;
    line: number;
    lexeme: string;
    constructor(sym: string, line: number, lexeme: string) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`
    }
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
    toString() {
        function walk(n: any, callback: any) {
            callback(n);
            n.children.forEach((x: any) => {
                walk(x, callback);
            });
        }
        let L: string[] = [];
        L.push("digraph d{");
        L.push(`node [fontname="Helvetica",shape=box];`);
        let counter = 0;
        walk(this, (n: any) => {
            n.NUMBER = "n" + (counter++);
            let tmp = n.sym;
            if (n.token) {
                tmp += "\n";
                tmp += n.token.lexeme;
            }
            tmp = tmp.replace(/&/g, "&amp;");
            tmp = tmp.replace(/</g, "&lt;");
            tmp = tmp.replace(/>/g, "&gt;");
            tmp = tmp.replace(/\n/g, "<br/>");

            L.push(`${n.NUMBER} [label=<${tmp}>];`);
        });
        walk(this, (n: any) => {
            n.children.forEach((x: any) => {
                L.push(`${n.NUMBER} -> ${x.NUMBER};`);
            });
        });
        L.push("}");
        return L.join("\n");
    }
}

class ErrorHandler {
    syntaxError(rec: any, sym: any, line: number,
        column: number, msg: string, e: any) {
        console.log("Syntax error:", msg, "on line", line,
            "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}




//export function parse(input:string) {
//    let data: string = fs.readFileSync("MyGrammar.txt", "utf8");
//    let grammar: Grammar = new Grammar(data);
//    let T: Tokenizer = new Tokenizer(grammar);
//    let level: number = 0;
//    T.setInput(input);
//    //console.log(input);
//    return parse_S();


//    function parse_S(): TreeNode {
//        let n = new TreeNode("S", null,level);
//        n.children.push(parse_stmt_list());
//        return n;

//    }
//    function parse_stmt_list(): TreeNode {
//        level++;
//        let n = new TreeNode("stmt-list", null, level);
//        if (!(T.peek(1).sym == "$" || T.peek(1).sym == "RBR")) {
//            n.children.push(parse_stmt());
//            n.children.push(parse_stmt_list());
//        }
//        return n;
//    }

//    function parse_stmt(): TreeNode {
//        level++;
//        let n = new TreeNode("stmt", null, level);

//        if (T.peek(1).sym == "WHILE") {
//            n.children.push(parse_loop());
//        }
//        else if (T.peek(1).sym == "IF") {
//            n.children.push(parse_cond());
//        }
//        else if (T.peek(1).sym == "ID") {
//            if (T.peek2().sym == "EQ") {
//                n.children.push(parse_assign());
//            }
//            else if (T.peek2().sym == "LP") {
//                n.children.push(parse_func_call());
//            }
//            else {
//                throw new Error("somthing went wrong");
//            }
//            n.children.push(new TreeNode("SEMI",T.expect("SEMI"),level));
//        }
//        else if (T.peek(1).sym == "LBR") {
//            n.children.push(new TreeNode("LBR", T.expect("LBR"), level));
//            n.children.push(parse_stmt_list());
//            n.children.push(new TreeNode("RBR", T.expect("RBR"), level));
//        }
//        else {
//            throw new Error("somthing went wrong"+ T.peek(1).sym);
//        }
//        return n;
//    }

//    function parse_loop(): TreeNode {
//        level++;
//        let n = new TreeNode("loop", null, level);
//        n.children.push(new TreeNode("WHILE", T.expect("WHILE"), level));
//        n.children.push(new TreeNode("LP", T.expect("LP"), level));
//        n.children.push(parse_expr());
//        n.children.push(new TreeNode("RP", T.expect("RP"), level));
//        n.children.push(parse_stmt());
//        return n;
//    }

//    function parse_assign(): TreeNode {
//        level++;
//        let n = new TreeNode("assign", null, level);
//        n.children.push(new TreeNode("ID", T.expect("ID"), level));
//        n.children.push(new TreeNode("EQ", T.expect("EQ"), level));
//        n.children.push(parse_expr());
//        return n;
//    }

//    function parse_cond(): TreeNode {
//        level++;
//        let n = new TreeNode("cond", null, level);
//        n.children.push(new TreeNode("IF", T.expect("IF"), level));
//        n.children.push(new TreeNode("LP", T.expect("LP"), level));
//        n.children.push(parse_expr());
//        n.children.push(new TreeNode("RP", T.expect("RP"), level));
//        n.children.push(parse_stmt());
//        if (T.peek(1).sym == "ELSE") {
//            n.children.push(new TreeNode("ELSE", T.expect("ELSE"), level));
//            n.children.push(parse_stmt());
//        }
        
//        return n;
//    }

//    function parse_func_call() {
//        level++;
//        let n = new TreeNode("func-call", null, level);
//        n.children.push(new TreeNode("ID", T.expect("ID"), level));
//        n.children.push(new TreeNode("LP", T.expect("LP"), level));
//        n.children.push(parse_param_list());
//        n.children.push(new TreeNode("RP", T.expect("RP"), level));

//        return n;
//    }

//    function parse_param_list() {
//        level++;
//        let n = new TreeNode("param-list", null, level);
//        if (T.peek(1).sym == "RP") {
//            //param - list -> lambda
//            return n;
//        }
//        else {
//            //param - list -> expr | expr CMA param - list'
//            n.children.push(parse_expr());

//            if (T.peek(1).sym == "CMA") {
//                n.children.push(parse_param_list());
//            }
//        }
//        //else, we're done
//        return n
//    }

//    function parse_expr():TreeNode{
//        level++;
//        let n = new TreeNode("expr", null, level);
//        if (T.peek(1).sym == "NUM") {
//            n.children.push(new TreeNode("NUM", T.expect("NUM"), level))
//        }
//        else if (T.peek(1).sym == "ID") {
//            n.children.push(new TreeNode("ID", T.expect("ID"), level));
//        }
//        else {
//            throw new Error("somthing went wrong");
//        }
//        return n;
//    }





//}

