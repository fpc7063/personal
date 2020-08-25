// https://www.youtube.com/watch?v=BwuLxPH8IDs

const person : {
     name: string;
     age: number;
     hobbies: string[];
     interests: (string | number | boolean)[]; //BAD PRACTICE
     ord: number[];
     role: [number, string];
} = {
    name: "Francisco",
    age: 21,
    hobbies: ["Programacao", "Jogar", "Anime"],
    interests: ["Computacao", 4, "Teste", true],
    ord: [0, 1, 2, 3, 3.14],
    role: [1, "Analista"]
}
console.log(person.name + ":" ,person.age)


for (const property of person.hobbies){
    console.log(property)
}
person.hobbies.forEach((hobbie) => {})


/*
A melhor pratica eh deixar o typescript determinar os tipos
*/

const person2 = {
   name: "Francisco",
   age: 21,
   hobbies: ["Programacao", "Jogar", "Anime"],
   interests: ["Computacao", 4, "Teste", true],
   ord: [0, 1, 2, 3, 3.14]
}
console.log(person.name + ":" ,person.age)


for (const property of person.hobbies){
   console.log(property)
}
person.hobbies.forEach((hobbie) => {})


/*
Core Types
number
string
boolean
object
array

tuple
enum
any
uknown    USAR UKNOWN ANTES DE ANY, POIS OFERECE MELHOR SUPORTE DO TYPESCRIPT
never
*/


enum Role {ADMIN, READONLY, AUTHOR}
enum Role2 {ADMIN = 'ADMIN', READONLY = 10, AUTHOR = 100}
console.log(Role.ADMIN)






//TYPE ALIASES
type tipo = "processo" | "self" | "sessao"
function kill(
    tipo: tipo
) {
    console.log(tipo)
    return
}
kill("processo")
kill("self")
//kill("batata")   NAO IRA FUNCIONAR


type Combinable = number | string

function teste(meuteste:Combinable) {
    console.log(meuteste)
}







//FUNCTIONS
//function NAME(VAR1: type):returnType {}
function add2(n1: number, n2:number):number {
    return n1 + n2
}

function myVoid(n1: number, text: string):void {
    console.log(text + n1)
}

function myUndefined(n1: number, text: string):undefined {
    console.log(text + n1)
    return
}

function withCallback(params: object, cb: (params) => void) {
    cb(params)
}



//never
function logger(message: string, code: number): never{
    throw { message: message, code: code }
}