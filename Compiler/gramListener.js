// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by gramParser.
function gramListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

gramListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
gramListener.prototype.constructor = gramListener;

// Enter a parse tree produced by gramParser#program.
gramListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by gramParser#program.
gramListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by gramParser#stmts.
gramListener.prototype.enterStmts = function(ctx) {
};

// Exit a parse tree produced by gramParser#stmts.
gramListener.prototype.exitStmts = function(ctx) {
};


// Enter a parse tree produced by gramParser#stmt.
gramListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by gramParser#stmt.
gramListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by gramParser#loop.
gramListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by gramParser#loop.
gramListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by gramParser#cond.
gramListener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by gramParser#cond.
gramListener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by gramParser#braceblock.
gramListener.prototype.enterBraceblock = function(ctx) {
};

// Exit a parse tree produced by gramParser#braceblock.
gramListener.prototype.exitBraceblock = function(ctx) {
};


// Enter a parse tree produced by gramParser#returnstmt.
gramListener.prototype.enterReturnstmt = function(ctx) {
};

// Exit a parse tree produced by gramParser#returnstmt.
gramListener.prototype.exitReturnstmt = function(ctx) {
};


// Enter a parse tree produced by gramParser#expr.
gramListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by gramParser#expr.
gramListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by gramParser#orexp.
gramListener.prototype.enterOrexp = function(ctx) {
};

// Exit a parse tree produced by gramParser#orexp.
gramListener.prototype.exitOrexp = function(ctx) {
};


// Enter a parse tree produced by gramParser#andexp.
gramListener.prototype.enterAndexp = function(ctx) {
};

// Exit a parse tree produced by gramParser#andexp.
gramListener.prototype.exitAndexp = function(ctx) {
};


// Enter a parse tree produced by gramParser#notexp.
gramListener.prototype.enterNotexp = function(ctx) {
};

// Exit a parse tree produced by gramParser#notexp.
gramListener.prototype.exitNotexp = function(ctx) {
};


// Enter a parse tree produced by gramParser#rel.
gramListener.prototype.enterRel = function(ctx) {
};

// Exit a parse tree produced by gramParser#rel.
gramListener.prototype.exitRel = function(ctx) {
};


// Enter a parse tree produced by gramParser#sum.
gramListener.prototype.enterSum = function(ctx) {
};

// Exit a parse tree produced by gramParser#sum.
gramListener.prototype.exitSum = function(ctx) {
};


// Enter a parse tree produced by gramParser#term.
gramListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by gramParser#term.
gramListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by gramParser#neg.
gramListener.prototype.enterNeg = function(ctx) {
};

// Exit a parse tree produced by gramParser#neg.
gramListener.prototype.exitNeg = function(ctx) {
};


// Enter a parse tree produced by gramParser#factor.
gramListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by gramParser#factor.
gramListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by gramParser#vardecllist.
gramListener.prototype.enterVardecllist = function(ctx) {
};

// Exit a parse tree produced by gramParser#vardecllist.
gramListener.prototype.exitVardecllist = function(ctx) {
};


// Enter a parse tree produced by gramParser#vardecl.
gramListener.prototype.enterVardecl = function(ctx) {
};

// Exit a parse tree produced by gramParser#vardecl.
gramListener.prototype.exitVardecl = function(ctx) {
};


// Enter a parse tree produced by gramParser#assign.
gramListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by gramParser#assign.
gramListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by gramParser#funccall.
gramListener.prototype.enterFunccall = function(ctx) {
};

// Exit a parse tree produced by gramParser#funccall.
gramListener.prototype.exitFunccall = function(ctx) {
};


// Enter a parse tree produced by gramParser#userfunccall.
gramListener.prototype.enterUserfunccall = function(ctx) {
};

// Exit a parse tree produced by gramParser#userfunccall.
gramListener.prototype.exitUserfunccall = function(ctx) {
};


// Enter a parse tree produced by gramParser#optionalexprlist.
gramListener.prototype.enterOptionalexprlist = function(ctx) {
};

// Exit a parse tree produced by gramParser#optionalexprlist.
gramListener.prototype.exitOptionalexprlist = function(ctx) {
};


// Enter a parse tree produced by gramParser#exprlist.
gramListener.prototype.enterExprlist = function(ctx) {
};

// Exit a parse tree produced by gramParser#exprlist.
gramListener.prototype.exitExprlist = function(ctx) {
};


// Enter a parse tree produced by gramParser#builtinfunccall.
gramListener.prototype.enterBuiltinfunccall = function(ctx) {
};

// Exit a parse tree produced by gramParser#builtinfunccall.
gramListener.prototype.exitBuiltinfunccall = function(ctx) {
};



exports.gramListener = gramListener;