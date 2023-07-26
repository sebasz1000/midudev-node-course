const path = require('node:path')

console.clear()
//unir rutas
// gets separator bars depending of os
console.log(path.sep)

//path.join() properly creates a path
const filePath = path.join('folder', 'subfolder', 'file.txt')
console.log(filePath)

//Gets the file name with extension(removes path)
const base = path.basename('/folder/subfolder/file.txt')
console.log(base)

//Gest the file name with no extension

const baseNoExt = path.basename('/folder/subfolder/file.txt', '.txt')
console.log(baseNoExt)

//Gets extension file name

const ext = path.extname('img.jpg')
console.log('File extension name:', ext)