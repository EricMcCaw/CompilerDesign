"use strict";
exports.__esModule = true;
var fs = require("fs");
var Parser_1 = require("./Parser");
function main() {
    var ok = testWithFile("tests.txt", false);
    if (ok)
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Basic tests OK [+100]-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    else
        return;
    ok = testWithFile("tests.txt", true);
    if (ok)
        console.log("-=-=-=-=-=-=-=-=-=-=-Bonus tests OK [+25]-=-=-=-=-=-=-=-=-=-=-");
    else
        return;
}
function testWithFile(fname, doBonus) {
    var data = fs.readFileSync(fname, "utf8");
    var tests = JSON.parse(data);
    var numTests = 0;
    for (var i = 0; i < tests.length; ++i) {
        var name_1 = tests[i]["name"];
        var expected = tests[i]["tree"];
        var bonus = tests[i]["bonus"];
        var input = tests[i]["input"];
        if (bonus !== doBonus)
            continue;
        var actual = void 0;
        try {
            actual = Parser_1.parse(input);
        }
        catch (e) {
            actual = undefined;
        }
        //console.log(actual);
        if (!treesAreSame(actual, expected)) {
            console.log(i);
            console.log(actual);
            console.log(expected);
            //printchildren(actual,expected);
            console.log("Test " + name_1 + " failed: Tree mismatch");
            return false;
        }
        console.log("Test " + name_1 + " Passed");
        ++numTests;
    }
    console.log(numTests + " tests OK");
    return true;
}
function treesAreSame(n1, n2) {
    if (n1 === undefined && n2 === undefined)
        return true;
    if (n1 === undefined && n2 !== undefined) {
        return false;
    }
    if (n2 === undefined && n1 !== undefined) {
        return false;
    }
    if (n1["sym"] != n2["sym"]) {
        return false;
    }
    if (n1["children"].length != n2["children"].length) {
        return false;
    }
    for (var i = 0; i < n1["children"].length; ++i) {
        if (!treesAreSame(n1["children"][i], n2["children"][i]))
            return false;
    }
    return true;
}
function printchildren(n1, n2) {
    console.log(n1.sym + n2.sym);
    for (var i = 0; i < n1.children.length; ++i) {
        printchildren(n1.children[i], n2.children[i]);
    }
}
main();
