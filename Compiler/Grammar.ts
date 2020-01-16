


export class Grammar
{
    constructor(input: string) {
        let grammarSet: Set<string> = new Set();
        let newInput = input.split("\n");
        var rex = /(.*?\s)(->\s)(.*)/g;
 

        for (let i = 0; i < newInput.length-1;i++) {
            rex.lastIndex = 0;
            let output = rex.exec(newInput[i]);
            let name: string;
            let newRex: string;
            if (output) {
                name = output[1];
                newRex = output[3];
                console.log(name, "is", newRex);

            }
            else {
                throw new Error("invalid structure");
            }
            if (grammarSet.has(name)) {
                throw new Error("conflicting regex");
            }
            else {
                try {
                    let testRex = new RegExp(newRex)
                    grammarSet.add(name);
                }
                catch{
                    throw new Error("this regex sucks");
                }
            }
        }
    }
}

