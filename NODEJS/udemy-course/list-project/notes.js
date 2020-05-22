const fs = require('fs')
const chalk = require('chalk')

//Internal functions
const saveNotes = (file = 'data.json', noteArray) => {

    const myJSON = JSON.stringify(noteArray)
    fs.writeFileSync(file, myJSON)
}

const readNotes = (file = 'data.json') => {
    try{
        const conteudo = fs.readFileSync(file).toString()
        const dataJSON = JSON.parse(conteudo)

        return dataJSON
    } catch (error) {
        return []
    }
}




//External functions
const addNote = (file = 'data.json', JavascriptObject) => {
    let { title, body } = JavascriptObject
    const notes = readNotes(file)
    const duplicated = notes.filter((note) => {
        return note.title === title
    })

    if (duplicated.length != 0) {
        console.log(chalk.red("Note title taken!"))
        return false
    } else {
        console.log(chalk.green(`Note: ${title} added!`))
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(file, notes)
}

const removeNote = (file = 'data.json', JavascriptObject) => {
    let { title } = JavascriptObject
    const notes = readNotes(file)
    const notesTitles = notes.map( (note) => {
        return note.title
    })
    const noteIndex = notesTitles.indexOf(title)

    var noteRemoved
    if (noteIndex != -1){
        noteRemoved = notes.splice(noteIndex, 1)
    } else {
        noteRemoved = 'NENHUM'
    }

    console.log(chalk.yellow("Nota removida:", noteRemoved))
    saveNotes(file, notes)
}

const listNotes = (file = 'data.json') => {
    let notes = readNotes(file)
    notes.forEach((note) => {
        console.log(`Nota: ${note.title}`)
    })

    return true
}

const readNote = (file = 'data.json', JavascriptObject) => {
    let { title } = JavascriptObject
    const notes = readNotes(file)
    const notesTitles = notes.map( (note) => {
        return note.title
    })
    const noteIndex = notesTitles.indexOf(title)
    const note = notes[noteIndex]

    if (noteIndex === -1){
        console.log(chalk.red("No note with name:" , title))
        return false
    }

    console.log(`Nota: ${note.title}\n\t${note.body}\n`)
}





module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 