const os = require('node:os')

globalThis.console.log(os.machine())
globalThis.console.log(os.release())
console.log('free memory', os.freemem() / 1024 / 1024)
console.log('total memory', os.totalmem() / 1024 / 1024)
console.log('awake pc time hours', os.uptime() / 60 /60)