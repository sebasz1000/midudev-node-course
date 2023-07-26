const fs = require('node:fs/promises')

Promise.all([
  fs.readFile('./archivo.txt', 'utf8'),
  fs.readFile('./archivo2.txt', 'utf8')
]).then(([ text1, text2]) => {
  console.log(text1)
  console.log(text2)
})
.catch(console.log)