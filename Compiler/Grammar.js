"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(input) {
        var _this = this;
        this.grammarSet = new Set();
        this.terminals = new Array();
        this.nonTerminals = new Array();
        this.nodeList = new Array();
        var newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
        this.terminals.push(new Terminal("WHITESPACE", /\s+/gy));
        var swapped = false;
        for (var i = 0; i < newInput.length - 1; i++) {
            rex.lastIndex = 0;
            if (newInput[i].length <= 1) {
                swapped = true;
                continue;
            }
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
                if (!swapped) {
                    try {
                        var testRex = new RegExp(newRex, "gy");
                        this.grammarSet.add(name_1.replace(/\s/g, ''));
                        this.terminals.push(new Terminal(name_1.replace(/\s/g, '').trim(), testRex));
                    }
                    catch (_a) {
                        throw new Error("this regex sucks");
                    }
                }
                else {
                    try {
                        this.grammarSet.add(name_1.replace(/\s/g, ''));
                        this.nonTerminals.push(new NonTerminal(name_1.replace(/\s/g, ''), newRex));
                    }
                    catch (_b) {
                        throw new Error("this regex sucks");
                    }
                }
            }
        }
        this.grammarSet.forEach(function (name) { return _this.nodeList.push(new NodeType(name)); });
        var _loop_1 = function (i) {
            var currentNode;
            this_1.nodeList.forEach(function (elem) {
                if (elem.label == _this.nonTerminals[i].leftSide) {
                    currentNode = elem;
                }
            });
            if (currentNode == null) {
                throw new Error("we have a problem jimbo");
            }
            var TempArray = this_1.nonTerminals[i].rightSide;
            var tempstring = void 0;
            tempstring = TempArray.join('');
            TempArray = tempstring.split(" ");
            TempArray.forEach(function (elem) {
                var found = false;
                if (elem != '') {
                    _this.nodeList.forEach(function (node) {
                        if (node.label == elem) {
                            if (!currentNode.nodeList.includes(node)) {
                                currentNode.nodeList.push(node);
                            }
                            found = true;
                        }
                    });
                    //if (!found) {
                    //    throw new Error("honestly its not good that we even made it here");
                    //}
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.nonTerminals.length; i++) {
            _loop_1(i);
        }
        var start = findNode(this.nonTerminals[0].leftSide, this.nodeList);
        if (start.label == "NULL") {
            throw new Error("Should have found this bug before now");
        }
        var visitedSet = new Set();
        dfs(start, visitedSet);
        if (visitedSet.size != this.nodeList.length) {
            // throw new Error("not everything was visited");
        }
    }
    Grammar.prototype.getNullable = function () {
        var nullable = new Set();
        for (var i = 0; i < this.nonTerminals.length; i++) {
            if (this.nonTerminals[i].nullable(this.nonTerminals, this.terminals)) {
                nullable.add(this.nonTerminals[i].leftSide);
            }
        }
        return nullable;
    };
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
var NonTerminal = /** @class */ (function () {
    function NonTerminal(left, right) {
        this.leftSide = left.trim();
        this.rightSide = right.split('|');
        this.isNullable = null;
        for (var i = 0; i < this.rightSide.length; i++) {
            this.rightSide[i] = this.rightSide[i].trim();
        }
    }
    NonTerminal.prototype.nullable = function (arr, termarr) {
        var _this = this;
        if (this.isNullable != null) {
            return this.isNullable;
        }
        for (var i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i] == 'lambda') {
                this.isNullable = true;
                return true;
            }
        }
        for (var i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i].indexOf(" ") > -1) {
                var temparray = this.rightSide[i].split(" ");
                var temp = false;
                for (var num = 0; num < temparray.length; num++) {
                    if (this.findTerminal(temparray[num], termarr) != null) {
                        temp = true;
                    }
                }
                for (var num = 0; num < temparray.length; num++) {
                    if (!temp) {
                        if (this.findNonTerminal(temparray[num], arr) != null && this.findNonTerminal(temparray[num], arr) != this) {
                            if (temparray.every(function (elem) { return _this.findNonTerminal(elem, arr).nullable(arr, termarr); })) {
                                this.isNullable = true;
                                return true;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                if (this.findNonTerminal(this.rightSide[i], arr) != null) {
                    if (this.findNonTerminal(this.rightSide[i], arr).nullable(arr, termarr)) {
                        this.isNullable = true;
                        return true;
                    }
                }
            }
        }
        this.isNullable = false;
        return false;
    };
    NonTerminal.prototype.findTerminal = function (name, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].sym == name) {
                return array[i];
            }
        }
        return null;
    };
    NonTerminal.prototype.findNonTerminal = function (name, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].leftSide == name) {
                return array[i];
            }
        }
        return null;
    };
    return NonTerminal;
}());
var NodeType = /** @class */ (function () {
    function NodeType(label) {
        this.label = label;
        this.nodeList = [];
    }
    return NodeType;
}());
function dfs(currNode, visited) {
    visited.add(currNode.label);
    currNode.nodeList.forEach(function (nextNode) {
        if (!visited.has(nextNode.label))
            dfs(nextNode, visited);
    });
}
function findNode(name, nodeList) {
    var found = false;
    var tempNode;
    nodeList.forEach(function (node) {
        if (node.label == name) {
            found = true;
            tempNode = node;
        }
    });
    if (!found) {
        return new NodeType("NULL");
    }
    else
        return tempNode;
}
