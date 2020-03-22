import { Token } from "./Token"
import { Tokenizer } from "./Tokenizer"
import { Grammar } from "./Grammar"
import { TreeNode } from "./shuntingyard"

declare var require: any;
let fs = require("fs");

export function parse(input:string) {
    let data: string = fs.readFileSync("MyGrammar.txt", "utf8");
    let grammar: Grammar = new Grammar(data);
    let T: Tokenizer = new Tokenizer(grammar);
    let level: number = 0;
    T.setInput(input);
    //console.log(input);
    return parse_S();


    function parse_S(): TreeNode {
        let n = new TreeNode("S", null,level);
        n.children.push(parse_stmt_list());
        return n;

    }
    function parse_stmt_list(): TreeNode {
        level++;
        let n = new TreeNode("stmt-list", null, level);
        if (!(T.peek(1).sym == "$" || T.peek(1).sym == "RBR")) {
            n.children.push(parse_stmt());
            n.children.push(parse_stmt_list());
        }
        return n;
    }

    function parse_stmt(): TreeNode {
        level++;
        let n = new TreeNode("stmt", null, level);

        if (T.peek(1).sym == "WHILE") {
            n.children.push(parse_loop());
        }
        else if (T.peek(1).sym == "IF") {
            n.children.push(parse_cond());
        }
        else if (T.peek(1).sym == "ID") {
            if (T.peek2().sym == "EQ") {
                n.children.push(parse_assign());
            }
            else if (T.peek2().sym == "LP") {
                n.children.push(parse_func_call());
            }
            else {
                throw new Error("somthing went wrong");
            }
            n.children.push(new TreeNode("SEMI",T.expect("SEMI"),level));
        }
        else if (T.peek(1).sym == "LBR") {
            n.children.push(new TreeNode("LBR", T.expect("LBR"), level));
            n.children.push(parse_stmt_list());
            n.children.push(new TreeNode("RBR", T.expect("RBR"), level));
        }
        else {
            throw new Error("somthing went wrong"+ T.peek(1).sym);
        }
        return n;
    }

    function parse_loop(): TreeNode {
        level++;
        let n = new TreeNode("loop", null, level);
        n.children.push(new TreeNode("WHILE", T.expect("WHILE"), level));
        n.children.push(new TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_expr());
        n.children.push(new TreeNode("RP", T.expect("RP"), level));
        n.children.push(parse_stmt());
        return n;
    }

    function parse_assign(): TreeNode {
        level++;
        let n = new TreeNode("assign", null, level);
        n.children.push(new TreeNode("ID", T.expect("ID"), level));
        n.children.push(new TreeNode("EQ", T.expect("EQ"), level));
        n.children.push(parse_expr());
        return n;
    }

    function parse_cond(): TreeNode {
        level++;
        let n = new TreeNode("cond", null, level);
        n.children.push(new TreeNode("IF", T.expect("IF"), level));
        n.children.push(new TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_expr());
        n.children.push(new TreeNode("RP", T.expect("RP"), level));
        n.children.push(parse_stmt());
        if (T.peek(1).sym == "ELSE") {
            n.children.push(new TreeNode("ELSE", T.expect("ELSE"), level));
            n.children.push(parse_stmt());
        }
        
        return n;
    }

    function parse_func_call() {
        level++;
        let n = new TreeNode("func-call", null, level);
        n.children.push(new TreeNode("ID", T.expect("ID"), level));
        n.children.push(new TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_param_list());
        n.children.push(new TreeNode("RP", T.expect("RP"), level));

        return n;
    }

    function parse_param_list() {
        level++;
        let n = new TreeNode("param-list", null, level);
        if (T.peek(1).sym == "RP") {
            //param - list -> lambda
            return n;
        }
        else {
            //param - list -> expr | expr CMA param - list'
            n.children.push(parse_expr());

            if (T.peek(1).sym == "CMA") {
                n.children.push(parse_param_list());
            }
        }
        //else, we're done
        return n
    }

    function parse_expr():TreeNode{
        level++;
        let n = new TreeNode("expr", null, level);
        if (T.peek(1).sym == "NUM") {
            n.children.push(new TreeNode("NUM", T.expect("NUM"), level))
        }
        else if (T.peek(1).sym == "ID") {
            n.children.push(new TreeNode("ID", T.expect("ID"), level));
        }
        else {
            throw new Error("somthing went wrong");
        }
        return n;
    }





}

