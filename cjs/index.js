//Common js module import
const sum = require('./sum')
// globalThis is a global variable common in Node and Browser(window )
globalThis.console.log('Hola')

globalThis.console.log(sum(1,2))

