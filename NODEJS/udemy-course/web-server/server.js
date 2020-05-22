console.log("Starting requires...")
const path = require('path')
const chalk = require('chalk')

const express = require('express')

console.log("Finishing requires...\n")
//console.log(__dirname) SERVER DIRECTORY FULL PATH
//console.log(__filename) SERVER FILE FULL PATH
//console.log(path.join(__dirname, 'src')) ./src



console.log("Initiating server...")
const app = express()
console.log("Importing public -----------------------")
const __public_path = path.join(__dirname, 'src/public')
app.use(express.static(__public_path))
console.log("Imported public ------------------------")






app.get('/', (req, res) => {
    res.send()
})

app.get('/new-access', (req, res) => {
    res.send("Help Page")
})














let port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})