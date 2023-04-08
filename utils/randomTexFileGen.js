const fs = require("node:fs")

const randomTextFileGen = (name, length) => {

    const randomArrayGenModified = (arrayLength) => {
        let randomArray = []
        let iterationNumber = 0

        for(let L = 0; L < arrayLength; L++) {
            randomArray.push(Math.floor(Math.random() * arrayLength))
            randomArray.push('\t')
            if ((iterationNumber % 15 == 0) && (iterationNumber !== 1)) randomArray.push('\n')
            
            iterationNumber += 1
        }
    
        return randomArray
    }
    
    fs.writeFileSync(name, randomArrayGenModified(length).join(""))
}


randomTextFileGen('test-11', 1e4)