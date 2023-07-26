const fs = require('node:fs')

//Async way for reading file
fs.readFile('./archivo.txt', {encoding: 'utf-8'} , (error, data) => {
  if(error){
    throw new Error(`There was an error on file reading: ${error}`)
  }
  console.log(data)
})

globalThis.console.log('I am being shown despite of firs file time reading consuption !!!')


fs.readFile('./archivo2.txt', 'utf-8', (error, data) => {
  if(error){
    throw new Error(`There was an error reading second file: ${error}`)
  }
  console.log(data)
})