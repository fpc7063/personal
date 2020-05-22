//validator - www.npmjs.com/package/validator ##################################
//DESC: Validate strings
vld = require('validator')

//Email teste
vld.isEmail('example@email.com')
//true
vld.isEmail('example.com')
//false

//Url teste
vld.isUrl('www.site.com')



//CHALK - www.npmjs.com/package/chalk #######################################
//DESC: PRINT IN COLORS
chalk = require('chalk')

//green, blue
chalk.green("Verde")
chalk.blue("Azul")

//inverse -> change bgColor and fontColor
//bold, italic
//underlin
//bg"color"


//YARGS www.npmjs.com/package/yargs ##################################################
require(yargs)
console.log(process.argv)
/*
[
    '/opt/node/bin/node',
    '/home/fpc-ubut/Git/personal/NODEJS/udemy-course/tmp/server.js',
    'add',
    '--title=My Title'
]
*/
console.log(yargs.argv)
/*
{ _: [ 'add' ], title: 'My Title', '$0': 'server.js' }
    */








//POSTMAN-REQUEST www.npmjs.com/package/postman-request NEW
