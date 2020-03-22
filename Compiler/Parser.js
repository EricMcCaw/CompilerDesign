"use strict";
exports.__esModule = true;
var Tokenizer_1 = require("./Tokenizer");
var Grammar_1 = require("./Grammar");
var shuntingyard_1 = require("./shuntingyard");
var fs = require("fs");
function parse(input) {
    var data = fs.readFileSync("MyGrammar.txt", "utf8");
    var grammar = new Grammar_1.Grammar(data);
    var T = new Tokenizer_1.Tokenizer(grammar);
    var level = 0;
    T.setInput(input);
    //console.log(input);
    return parse_S();
    function parse_S() {
        var n = new shuntingyard_1.TreeNode("S", null, level);
        n.children.push(parse_stmt_list());
        return n;
    }
    function parse_stmt_list() {
        level++;
        var n = new shuntingyard_1.TreeNode("stmt-list", null, level);
        if (!(T.peek(1).sym == "$" || T.peek(1).sym == "RBR")) {
            n.children.push(parse_stmt());
            n.children.push(parse_stmt_list());
        }
        return n;
    }
    function parse_stmt() {
        level++;
        var n = new shuntingyard_1.TreeNode("stmt", null, level);
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
            n.children.push(new shuntingyard_1.TreeNode("SEMI", T.expect("SEMI"), level));
        }
        else if (T.peek(1).sym == "LBR") {
            n.children.push(new shuntingyard_1.TreeNode("LBR", T.expect("LBR"), level));
            n.children.push(parse_stmt_list());
            n.children.push(new shuntingyard_1.TreeNode("RBR", T.expect("RBR"), level));
        }
        else {
            throw new Error("somthing went wrong" + T.peek(1).sym);
        }
        return n;
    }
    function parse_loop() {
        level++;
        var n = new shuntingyard_1.TreeNode("loop", null, level);
        n.children.push(new shuntingyard_1.TreeNode("WHILE", T.expect("WHILE"), level));
        n.children.push(new shuntingyard_1.TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_expr());
        n.children.push(new shuntingyard_1.TreeNode("RP", T.expect("RP"), level));
        n.children.push(parse_stmt());
        return n;
    }
    function parse_assign() {
        level++;
        var n = new shuntingyard_1.TreeNode("assign", null, level);
        n.children.push(new shuntingyard_1.TreeNode("ID", T.expect("ID"), level));
        n.children.push(new shuntingyard_1.TreeNode("EQ", T.expect("EQ"), level));
        n.children.push(parse_expr());
        return n;
    }
    function parse_cond() {
        level++;
        var n = new shuntingyard_1.TreeNode("cond", null, level);
        n.children.push(new shuntingyard_1.TreeNode("IF", T.expect("IF"), level));
        n.children.push(new shuntingyard_1.TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_expr());
        n.children.push(new shuntingyard_1.TreeNode("RP", T.expect("RP"), level));
        n.children.push(parse_stmt());
        if (T.peek(1).sym == "ELSE") {
            n.children.push(new shuntingyard_1.TreeNode("ELSE", T.expect("ELSE"), level));
            n.children.push(parse_stmt());
        }
        return n;
    }
    function parse_func_call() {
        level++;
        var n = new shuntingyard_1.TreeNode("func-call", null, level);
        n.children.push(new shuntingyard_1.TreeNode("ID", T.expect("ID"), level));
        n.children.push(new shuntingyard_1.TreeNode("LP", T.expect("LP"), level));
        n.children.push(parse_param_list());
        n.children.push(new shuntingyard_1.TreeNode("RP", T.expect("RP"), level));
        return n;
    }
    function parse_param_list() {
        level++;
        var n = new shuntingyard_1.TreeNode("param-list", null, level);
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
        return n;
    }
    function parse_expr() {
        level++;
        var n = new shuntingyard_1.TreeNode("expr", null, level);
        if (T.peek(1).sym == "NUM") {
            n.children.push(new shuntingyard_1.TreeNode("NUM", T.expect("NUM"), level));
        }
        else if (T.peek(1).sym == "ID") {
            n.children.push(new shuntingyard_1.TreeNode("ID", T.expect("ID"), level));
        }
        else {
            throw new Error("somthing went wrong");
        }
        return n;
    }
}
exports.parse = parse;
