var ji = require('../');
var fs = require('fs');
var path = require('path')

var str = "abc"

console.log('(',ji.encode(str),')')
fs.writeFileSync(path.join(__dirname,"./output"), ji.encode(str))
// console.log(ji.deconde())