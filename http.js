const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')
const server = http.createServer((req, res) => {
  res.end('Hello world')
})

const desiredPort = process.env.PORT ?? 3000

//! automatically asings an available port
findAvailablePort(desiredPort).then(availablePort => {
  const port = availablePort
  server.listen(port, () => {
    console.log(`Server running at port http://localhost:${server.address().port}`)
  })
})
