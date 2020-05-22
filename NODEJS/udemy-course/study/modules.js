//https://links.mead.io/nodecourse

//NODE 14.X



//Require modules from the project
const importedObject = require('./path/to/script.js')
//ON script.js
let exportedObject = { myexport: 'value',
                    yes: true }
module.exports = exportedObject






//FILE SYSTEM - https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

//importa o modulo e istancia ele
const fs = require('fs')
//Escreve a mensagem no arquivo especificado
fs.writeFileSync('arquivo.extensao', 'O que vc quer escrever')
//Abre o arquivo

//Fecha o arquivo

//Append na mensagem
fs.appendFileSync('arquivo.extensao', '\nadicionando nova linha ao arquivo')
//Read
const conteudo = fs.readFileSync('arquivo.extensao').toString()




//DEBUGGER #########################################
debugger
"node inspect program-name.js"
//    chrome://inspect




//PATH ##################################################
const path = require('path')
path.join()








