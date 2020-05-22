console.log("Iniciando requires...")

const notes = require('./notes.js')
const vld = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//if(error) throw console.log(chalk.red.bold.inverse("ERROR: \n" + ERROR))

console.log(chalk.green.bold.inverse("Finalizando requires\n"))



//ARGV
//console.log(process.argv)
const command = process.argv[2]

//CONFIGURE YARGS
//--version on bash execution
//yargs.version('1.0.0')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote('data.json', argv)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote('data.json', argv)
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        notes.listNotes('data.json')
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote('data.json', argv)
    }
})






console.log(chalk.green.bold.inverse(`Sucesso! PID:${process.pid} # # # # # # # # #\n\n\n`))

//Inicio da aplicação
//console.log(yargs.argv)
yargs.parse()