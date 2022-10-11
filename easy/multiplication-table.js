const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question(`
    Olá, seja bem vindo ao sistema de tabuada!
    Digite um número inteiro: `, (msg) => {

    let termoDeParada = true
    let contador = 0;
    while (termoDeParada) {
        termoDeParada = contador < 10
        console.log(`    ${msg} * ${contador} = ${msg * contador}`)
        contador += 1
    }

    terminal.close()

})
