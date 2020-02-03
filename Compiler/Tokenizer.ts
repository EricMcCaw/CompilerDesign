
import { Token } from "./Token"
import { Grammar } from "./Grammar"

export class Tokenizer {
    grammar: Grammar;
    inputData: string;
    lineNumber: number;
    idx: number;    //index of next unparsed char in inputData

    constructor(grammar: Grammar) {
        this.grammar = grammar;
        this.lineNumber = 1;
        this.idx = 0;
    }
    setInput(inputData: string) {
        this.inputData = inputData;
        this.idx = 0;
        this.lineNumber = 1;
    }
    next(): Token {
        
        if (this.idx >= this.inputData.length-1) {
            //special "end of file" metatoken
            
            return new Token("$", undefined, this.lineNumber);
        }
        
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            let terminal = this.grammar.terminals[i];
            let sym = terminal.sym;
            let rex = terminal.rex;     //RegExp
            rex.lastIndex = this.idx;   //tell where to start searching
            let m = rex.exec(this.inputData);   //do the search
            if (m) {
                //m[0] contains matched text as string
                let lexeme = m[0];
                this.idx += lexeme.length;
                
                let num = lexeme.split("\n");
                let temp = this.lineNumber;
                if (sym != "STRING") {
                    this.lineNumber += num.length - 1;
                    temp = this.lineNumber;
                }
                else {
                    this.lineNumber += num.length - 1;
                }
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    
                    return new Token(sym, lexeme, temp);

                } else {
                    //skip whitespace and get next real token
                    return this.next();
                }
                
            }
        }
        //no match; syntax error
        throw new Error("syntax error");
    }
}