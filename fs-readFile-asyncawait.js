const fs = require('node:fs/promises');

//CURSO de NODE.JS desde CERO Midudev 
// ! min: 1:24

fs.stat('./archivo.txt')
  .then( data =>  console.log(data.birthtime));

(async function(){
  const firstContent = await fs.readFile('./archivo.txt', 'utf-8')
  console.log(firstContent)
})();

globalThis.console.log('*** I am being called despite of first and second time compsumtion readings');

(async function(){
  const secondContent = await fs.readFile('./archivo2.txt', 'utf-8')
  console.log(secondContent)
})();