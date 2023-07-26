const fs = require('node:fs/promises')

// * Reading file asyncronouslly with fs/promises to use promise return instead of using normal readFile callback function

const promess = fs.readFile('./archivo.txt', 'utf-8')
promess
  .then(console.log)
  .catch(e => {
    throw new Error('There was an error reading first file')
  })

globalThis.console.log('I am being shown despite first and second file reading thanks to promess async call')

fs.readFile('./archivo2.txt', 'utf8')
  .then(console.log)
  .catch( e => {
    throw new Error('There was an error reading second file')
  })