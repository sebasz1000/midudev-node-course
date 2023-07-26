const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')
//! min 1:42

async function ls (directory) {
  let files = []
  // * separated try catch let manage errors catching individually. RECOMENDED
  try {
    files = await fs.readdir(directory)
  } catch {
    console.log(pc.red(` There was an error reading directory ${directory}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(directory, file)
    let fileStat
    try {
      fileStat = await fs.stat(filePath) // * stats give the file informations (isDirectory(), isFolder(), size, etc...)
    } catch {
      console.log(pc.red(`Error getting stats for ${file} file`))
      process.exit(1)
    }
    const isDirectory = fileStat.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = fileStat.size
    const fileModified = fileStat.mtime.toLocaleString()

    return `${pc.yellow(fileType)} ${pc.green(file).padEnd(30)} ${fileSize.toString().padStart(10)}bytes ${pc.bgBlack(fileModified)}`
  })

  Promise.all(filesPromises)
    .then(statsStrings => statsStrings.forEach(text => console.log(text)))
};

const directory = process.argv[2] ?? './'

;(async function () {
  await ls(directory)
})()
