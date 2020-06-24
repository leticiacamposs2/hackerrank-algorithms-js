const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question(`
    Olá, seja bem vindo ao sistema que altera a vogal por *!
    Digite uma palavra ou uma frase: `, (word) => {

    const newWord = word.replace(/a|e|i|o|u/gi, '*');
    console.log(`
    ${newWord}
    `);

    terminal.close()
})
