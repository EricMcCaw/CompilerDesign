


export class Grammar
{
    grammarSet: Set<string> = new Set();
    terminals: Array<Terminal> = new Array();
    constructor(input: string) {
        let newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
      
        this.terminals.push(new Terminal("WHITESPACE", /\s+/gy));
        for (let i = 0; i < newInput.length-1;i++) {
            rex.lastIndex = 0;
            let output = rex.exec(newInput[i]);
            let name: string;
            let newRex: string;
            if (output) {
                name = output[1];
                newRex = output[3];
              

            }
            else {
                throw new Error("invalid structure");
            }
            if (this.grammarSet.has(name)) {
                throw new Error("conflicting regex");
            }
            else {
                try {
                    let testRex = new RegExp(newRex,"gy");
                    this.grammarSet.add(name);
                    this.terminals.push(new Terminal(name.slice(0,-1), testRex));
                }
                catch{
                    throw new Error("this regex sucks");
                }
            }
        }
    }
}

class Terminal
{
    sym: string;
    rex: RegExp;

    constructor(Sym: string, Rex: RegExp) {
        this.sym = Sym;
        this.rex = Rex;

    }

}
