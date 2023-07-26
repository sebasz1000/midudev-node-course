const fs = require('node:fs')

// Sincronycally get file stats
const stats = fs.statSync('./archivo.txt')
console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.size / 1024 / 1024 + 'Mbs'
)

console.log('Me ejecuto!')
