const fs = require('node:fs')
// * Syncronous excecution of code
console.log('leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', {encoding: 'utf-8'})
console.log(text)

console.log('****I would like to be shown despite of first file reading time consumption, but I am syncronous***')

console.log('Leyendo el segundo archivo ...')
const text2 = fs.readFileSync('./archivo2.txt','utf-8')
console.log(text2)