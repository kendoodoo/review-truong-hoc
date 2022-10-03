var crypto = require('crypto');
console.log(crypto.randomBytes(Math.ceil(5/2)).toString('hex').slice(0,5))