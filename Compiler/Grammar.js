"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(input) {
        this.grammarSet = new Set();
        this.terminals = new Array();
        var newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
        this.terminals.push(new Terminal("WHITESPACE", /\s+/gy));
        for (var i = 0; i < newInput.length - 1; i++) {
            rex.lastIndex = 0;
            var output = rex.exec(newInput[i]);
            var name_1 = void 0;
            var newRex = void 0;
            if (output) {
                name_1 = output[1];
                newRex = output[3];
            }
            else {
                throw new Error("invalid structure");
            }
            if (this.grammarSet.has(name_1)) {
                throw new Error("conflicting regex");
            }
            else {
                try {
                    var testRex = new RegExp(newRex, "gy");
                    this.grammarSet.add(name_1);
                    this.terminals.push(new Terminal(name_1.slice(0, -1), testRex));
                }
                catch (_a) {
                    throw new Error("this regex sucks");
                }
            }
        }
    }
    return Grammar;
}());
exports.Grammar = Grammar;
var Terminal = /** @class */ (function () {
    function Terminal(Sym, Rex) {
        this.sym = Sym;
        this.rex = Rex;
    }
    return Terminal;
}());
