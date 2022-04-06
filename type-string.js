const texto1 = "Olá, mundo!";
const text2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";

const stringNumeros = "34567"; 

const citacao = 'O leo disse "oi"';
console.log(citacao)

// concatenação {+}

const citacao2 = "Meu nome é ";
const meuNome = "André";

console.log(citacao2 + meuNome)

// Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação
/*
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
*/
// To lower case

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// Length

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres

// template string ou template literal

