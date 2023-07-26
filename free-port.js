const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiredPort, () => {
      // * the desired port is available because it's listening, so we get the server port we are listening
      const port = server.address().port
      server.close(() => {
        resolve(port)
      })
    })

    // * Handling error event(Node manages events)
    server.on('error', (error) => {
      if (error === 'EADDRINUSE') {
        findAvailablePort(0)
          .then(port => resolve(port))
      } else {
        // ! Another error no related with Port in use EADDRINUSE
        reject(error)
      }
    })
  })
}

module.exports = { findAvailablePort }
