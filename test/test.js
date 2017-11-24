var ji = require('../');


console.log('(',ji.encode("console.log(2222)"),')')
console.log(ji.deconde(ji.encode("console.log(2222)")))