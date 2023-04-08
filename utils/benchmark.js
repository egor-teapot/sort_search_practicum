const process = require('process')

const benchmark = (fn) => {

    let b = {}
  
    let start = process.hrtime();
  
    fn
  
    let stop = process.hrtime(start);
  
    b.output = fn
    b.hrtime = (stop[0] * 1e9 + stop[1]) / 1e4
  
    return b
}

module.exports = { benchmark }