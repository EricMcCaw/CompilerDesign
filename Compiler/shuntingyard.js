"use strict";
exports.__esModule = true;
var Tokenizer_1 = require("./Tokenizer");
var Grammar_1 = require("./Grammar");
var fs = require("fs");
function parse(input) {
    var operators = {
        "ADDOP": 3,
        "LP": 1,
        "POWOP": 6,
        "MULOP": 4,
        "BITNOT": 5,
        "COMMA": 2,
        "NEGATE": 5,
        "func-call": 2,
        "func-call-no-args": 2
    };
    var associativity = {
        "LP": "left",
        "COMMA": "left",
        "ADDOP": "left",
        "MULOP": "left",
        "NEGATE": "right",
        "POWOP": "right",
        "BITNOT": "right",
        "func-call": "right",
        "func-call-no-args": "right"
    };
    var arity = {
        "LP": 2,
        "COMMA": 2,
        "ADDOP": 2,
        "MULOP": 2,
        "NEGATE": 1,
        "POWOP": 2,
        "BITNOT": 1,
        "func-call": 2,
        "func-call-no-args": 1
    };
    var data = fs.readFileSync("MyGrammar.txt", "utf8");
    var operatorStack = new Array();
    var operandStack = new Array();
    var grammar = new Grammar_1.Grammar(data);
    var tokenizer = new Tokenizer_1.Tokenizer(grammar);
    tokenizer.setInput(input);
    while (!tokenizer.atEnd()) {
        var t = tokenizer.next();
        if (t.lexeme == "-") {
            var p = tokenizer.previous();
            if (p.sym == "NULL" || p.sym == "LPAREN" || p.sym in operators) {
                t.sym = "NEGATE";
                console.log("I am now a negate");
            }
        }
        if (t.sym == "ID" && tokenizer.peek(1).sym == "LP") {
            if (tokenizer.peek(2).sym == "RP") {
                operatorStack.push(new TreeNode("func-call-no-args", t));
                console.log("now adding no args func call");
            }
            else {
                operatorStack.push(new TreeNode("func-call", t));
                console.log("now adding func call");
            }
        }
        var sym = t.sym;
        if (sym == "$") {
            break;
        }
        if (sym == "RP") {
            while (true) {
                if (operatorStack[operatorStack.length - 1].sym == "LP") {
                    operatorStack.pop();
                    break;
                }
                else {
                    doOperation();
                }
            }
            continue;
        }
        if (sym == "LP" || sym == "POWOP" || sym == "BITNOT" || sym == "NEGATE") {
            operatorStack.push(new TreeNode(t.sym, t));
            continue;
        }
        if (sym == "NUM" || sym == "ID") {
            console.log("adding", t.lexeme, "to the operand stack");
            operandStack.push(new TreeNode(t.sym, t));
        }
        else {
            var assoc = associativity[sym];
            while (true) {
                if (operatorStack.length <= 0)
                    break;
                var A = operatorStack[operatorStack.length - 1].sym;
                if (assoc == "left" && operators[A] >= operators[sym]) {
                    doOperation();
                }
                else {
                    if (assoc == "right" && operators[A] > operators[sym]) {
                        doOperation();
                    }
                    else {
                        break;
                    }
                }
            }
            console.log("I am adding", t.lexeme, "to operator stack");
            operatorStack.push(new TreeNode(t.sym, t));
        }
    }
    while (operatorStack.length > 0) {
        doOperation();
    }
    //console.log("returning operand", operandStack[0])
    return operandStack[0];
    function doOperation() {
        var opNode = operatorStack.pop();
        var c1 = operandStack.pop();
        console.log("adding c1", c1.token.lexeme, "to", opNode.token.lexeme, "children");
        if (arity[opNode.sym] == 2) {
            var c2 = operandStack.pop();
            //console.log("adding c2", c2.token.lexeme, "to", opNode.token.lexeme,"children");
            opNode.addChild(c2);
        }
        opNode.addChild(c1);
        if (opNode.sym == "func-call-no-args") {
            opNode.sym = "func-call";
        }
        operandStack.push(opNode);
    }
}
exports.parse = parse;
var TreeNode = /** @class */ (function () {
    function TreeNode(sym, token, num) {
        this.sym = sym;
        this.token = token;
        this.children = [];
        this.num = num;
    }
    TreeNode.prototype.addChild = function (node) {
        this.children.push(node);
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
