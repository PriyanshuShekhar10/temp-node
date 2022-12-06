// setInterval(() => {
//     console.log('hello world')
// }, 1000)

//Modules in node
//Modules - Encapsulated code(only share minimum)
//CommomJS, every file in node is module (by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
// console.log(data)
// console.log(names)

require('./7-mind-grenade')
//  sayHi('susan')
//  sayHi(names.john)
//  sayHi(names.peter)


/*Built in modules
Os
path
fs
http
 */

