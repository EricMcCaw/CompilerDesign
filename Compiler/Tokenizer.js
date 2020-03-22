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
        this.currTok = new Token_1.Token("NULL", "NULL", -1);
        this.prevTok = new Token_1.Token("NULL", "NULL", -1);
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
                    this.prevTok = this.currTok;
                    this.currTok = new Token_1.Token(sym, lexeme, temp);
                    return this.currTok;
                }
                else {
                    //skip whitespace and get next real token
                    this.prevTok = new Token_1.Token(sym, lexeme, temp);
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("syntax error");
    };
    Tokenizer.prototype.peek = function (amount) {
        var tempToken = new Tokenizer(this.grammar);
        tempToken.setInput(this.inputData);
        var currTok = new Token_1.Token("NULL", "NULL", -1);
        while (currTok.lexeme != this.currTok.lexeme || this.currTok.line != currTok.line || tempToken.idx != this.idx) {
            currTok = tempToken.next();
        }
        for (var i = 0; i < amount; i++) {
            currTok = tempToken.next();
        }
        return currTok;
    };
    Tokenizer.prototype.peek2 = function () {
        var tempToken = new Tokenizer(this.grammar);
        tempToken.setInput(this.inputData);
        var currTok = new Token_1.Token("NULL", "NULL", -1);
        while (currTok.lexeme != this.currTok.lexeme || this.currTok.line != currTok.line || tempToken.idx != this.idx) {
            currTok = tempToken.next();
        }
        for (var i = 0; i < 2; i++) {
            currTok = tempToken.next();
        }
        return currTok;
    };
    Tokenizer.prototype.expect = function (check) {
        var tempToken = new Tokenizer(this.grammar);
        tempToken.setInput(this.inputData);
        var currTok = new Token_1.Token("NULL", "NULL", -1);
        while (currTok.lexeme != this.currTok.lexeme || this.currTok.line != currTok.line || tempToken.idx != this.idx) {
            currTok = tempToken.next();
        }
        currTok = tempToken.next();
        if (currTok.sym == check) {
            return this.next();
        }
        throw new Error("you expected something and didnt get it");
        return null;
    };
    Tokenizer.prototype.previous = function () {
        return this.prevTok;
    };
    Tokenizer.prototype.atEnd = function () {
        return this.idx >= this.inputData.length - 1;
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
