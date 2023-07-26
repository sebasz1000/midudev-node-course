const fs = require('node:fs')

fs.readdir('./', (err, data) => {
  if (err) {
    throw new Error('Error')
  }
  data.forEach(file => console.log(file))
})
