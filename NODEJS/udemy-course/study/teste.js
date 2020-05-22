console.log("iniciando....")

const minhaFuncao = (algumaCoisa, callback) => {
    console.log(algumaCoisa) //oi
    setTimeout(() => {
        console.log("esperando 10 segundos")
        callback("cebola")
    }, 10000)
}
let saudacao = "oi"
minhaFuncao(saudacao, (verdura) => {
    console.log(verdura) //cebola
    setTimeout(() => {
        console.log("esperando 2 segundos")
    }, 2000)
    console.log("ANTES DOS DOIS SEGUNDOS!")
})

console.log("finalizando....")
