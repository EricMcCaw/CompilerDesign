"use strict";
exports.__esModule = true;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.grammar = grammar;
        this.lineNumber = 1;
        this.idx = 0;
    }
    Tokenizer.prototype.setInput = function (inputData) {
        this.inputData = inputData;
        this.idx = 0;
        this.lineNumber = 1;
    };
    Tokenizer.prototype.next = function () {
        if (this.idx >= this.inputData.length - 1) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.lineNumber);
        }
        for (var i = 0; i < this.grammar.terminals.length; ++i) {
            var terminal = this.grammar.terminals[i];
            var sym = terminal.sym;
            var rex = terminal.rex; //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            var m = rex.exec(this.inputData); //do the search
            if (m) {
                //m[0] contains matched text as string
                var lexeme = m[0];
                this.idx += lexeme.length;
                var num = lexeme.split("\n");
                var temp = this.lineNumber;
                if (sym != "STRING") {
                    this.lineNumber += num.length - 1;
                    temp = this.lineNumber;
                }
                else {
                    this.lineNumber += num.length - 1;
                }
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    return new Token_1.Token(sym, lexeme, temp);
                }
                else {
                    //skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("syntax error");
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
