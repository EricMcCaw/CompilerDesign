"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var util_1 = require("util");
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
    Grammar.prototype.getFollow = function () {
        var follow = new Map();
        var prevfollow = new Map();
        var first = this.getFirst();
        var nullables = this.getNullable();
        //console.log("nullables", nullables);
        follow.set(this.nonTerminals[0].leftSide, new Set("$"));
        for (var i = 0; i <= this.nonTerminals.length; i++) {
            if (i == this.nonTerminals.length) {
                i = 0;
                if (dictionariesAreSame(prevfollow, follow)) {
                    break;
                }
                prevfollow = new Map(follow);
            }
            var N = this.nonTerminals[i];
            for (var j = 0; j < N.rightSide.length; j++) {
                var P = N.rightSide[j];
                if (P.split(" ").length > 1) {
                    var temp = P.split(" ");
                    for (var place = 0; place < temp.length; place++) {
                        var x = temp[place];
                        if (this.findNonTerminal(x, this.nonTerminals) != null) {
                            var broke = false;
                            for (var t = 1; t < temp.length - place; t++) {
                                var y = temp[place + t];
                                follow.set(x, union(follow.get(x), first.get(y)));
                                if (!nullables.has(y)) {
                                    broke = true;
                                    break;
                                }
                            }
                            if (!broke) {
                                follow.set(x, union(follow.get(N.leftSide), follow.get(x)));
                            }
                        }
                    }
                }
                else {
                    if (this.findNonTerminal(P, this.nonTerminals) != null) {
                        follow.set(P, union(follow.get(N.leftSide), follow.get(P)));
                    }
                }
            }
        }
        return follow;
    };
    Grammar.prototype.getFirst = function () {
        var first = new Map();
        var prevFirst = new Map();
        var nullables = this.getNullable();
        for (var i = 0; i < this.terminals.length; i++) {
            if (this.terminals[i].sym != "WHITESPACE") {
                var tempSet = new Set();
                tempSet.add(this.terminals[i].sym);
                first.set(this.terminals[i].sym, tempSet);
            }
        }
        for (var i = 0; i <= this.nonTerminals.length; i++) {
            if (i == this.nonTerminals.length) {
                i = 0;
                if (dictionariesAreSame(prevFirst, first)) {
                    break;
                }
                prevFirst = new Map(first);
            }
            var N = this.nonTerminals[i];
            for (var j = 0; j < N.rightSide.length; j++) {
                var P = N.rightSide[j];
                if (P.split(" ").length > 1) {
                    var temp = P.split(" ");
                    if (temp[0] == N.leftSide) {
                        continue;
                    }
                    if (this.findNonTerminal(temp[0], this.nonTerminals) != null) {
                        var nonright = this.findNonTerminal(temp[0], this.nonTerminals).rightSide;
                        var isLam = false;
                        for (var ind = 0; ind < nonright.length; ind++) {
                            if (nonright[ind] == 'lambda') {
                                isLam = true;
                                break;
                            }
                        }
                        if (isLam) {
                            first.set(N.leftSide, union(first.get(N.leftSide), first.get(temp[1])));
                        }
                    }
                    first.set(N.leftSide, union(first.get(N.leftSide), first.get(temp[0])));
                    if (nullables.has(temp[0])) {
                        break;
                    }
                }
                else {
                    first.set(N.leftSide, union(first.get(N.leftSide), first.get(P)));
                }
            }
        }
        return first;
    };
    Grammar.prototype.getNullable = function () {
        var nullable = new Set();
        for (var i = 0; i < this.nonTerminals.length; i++) {
            if (this.nonTerminals[i].nullable(this.nonTerminals, this.terminals)) {
                nullable.add(this.nonTerminals[i].leftSide);
            }
        }
        return nullable;
    };
    Grammar.prototype.findNonTerminal = function (name, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].leftSide == name) {
                return array[i];
            }
        }
        return null;
    };
    return Grammar;
}());
exports.Grammar = Grammar;
function dictionariesAreSame(s1, s2) {
    var e_1, _a, e_2, _b, e_3, _c;
    var M1 = s1;
    var M2 = s2;
    var k1 = [];
    var k2 = [];
    try {
        for (var _d = __values(M1.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var k = _e.value;
            k1.push(k);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _f = __values(M2.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
            var k = _g.value;
            k2.push(k);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
        }
        finally { if (e_2) throw e_2.error; }
    }
    k1.sort();
    k2.sort();
    if (!listsEqual(k1, k2)) {
        //console.log("keys not equal:", k1, k2);
        return false;
    }
    try {
        for (var k1_1 = __values(k1), k1_1_1 = k1_1.next(); !k1_1_1.done; k1_1_1 = k1_1.next()) {
            var k = k1_1_1.value;
            if (!listsEqual(M1.get(k), M2.get(k))) {
                //console.log("Lists not equal on key ", k, " : Expected: ", M1.get(k), "what you gave", M2.get(k));
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (k1_1_1 && !k1_1_1.done && (_c = k1_1["return"])) _c.call(k1_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return true;
}
function listsEqual(L1a, L2a) {
    var L1 = [];
    var L2 = [];
    L1a.forEach(function (x) {
        L1.push(x);
    });
    L2a.forEach(function (x) {
        L2.push(x);
    });
    L1.sort();
    L2.sort();
    if (L1.length !== L2.length)
        return false;
    for (var i = 0; i < L1.length; ++i) {
        if (L1[i] !== L2[i])
            return false;
    }
    return true;
}
function union(setA, setB) {
    var e_4, _a;
    var _union = new Set(setA);
    if (!util_1.isNullOrUndefined(setB)) {
        var myArr = Array.from(setB);
        try {
            for (var myArr_1 = __values(myArr), myArr_1_1 = myArr_1.next(); !myArr_1_1.done; myArr_1_1 = myArr_1.next()) {
                var elem = myArr_1_1.value;
                _union.add(elem);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (myArr_1_1 && !myArr_1_1.done && (_a = myArr_1["return"])) _a.call(myArr_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    return _union;
}
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
    NonTerminal.prototype.onRightside = function (check) {
        for (var i = 0; i < this.rightSide.length; i++) {
            if (this.rightSide[i].split(" ").length > 1) {
                var temp = this.rightSide[i].split(" ");
                for (var j = 0; j < temp.length; j++) {
                    if (temp[j] == check) {
                        return true;
                    }
                }
            }
            else {
                if (this.rightSide[i] == check) {
                    return true;
                }
            }
        }
        return false;
    };
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
