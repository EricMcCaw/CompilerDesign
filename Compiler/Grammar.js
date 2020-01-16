"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(input) {
        var grammarSet = new Set();
        var newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
        for (var i = 0; i < newInput.length - 1; i++) {
            rex.lastIndex = 0;
            var output = rex.exec(newInput[i]);
            var name_1 = void 0;
            var newRex = void 0;
            if (output) {
                name_1 = output[1];
                newRex = output[3];
                console.log(name_1, "is", newRex);
            }
            else {
                throw new Error("invalid structure");
            }
            if (grammarSet.has(name_1)) {
                throw new Error("conflicting regex");
            }
            else {
                try {
                    var testRex = new RegExp(newRex);
                    grammarSet.add(name_1);
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
