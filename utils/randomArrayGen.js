const randomArrayGen = (arrayLength) => {
    let randomArray = []
    for(let L = 0; L < arrayLength; L++) {
        randomArray.push(Math.floor(Math.random() * arrayLength))
    }

    return randomArray
}

module.exports = {randomArrayGen}