const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question(`
    Olá, seja bem vindo ao sistema que identifica se o número é primo ou não!
    Digite um número natural inteiro: `, (num) => {

    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        };
    }

        isPrime ? console.log(`    É primo!`) : console.log(`    Não é primo!`)

    terminal.close()
})
