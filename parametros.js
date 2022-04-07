// parâmetros de função

function soma(numero1, numero2)
{
    return numero1 + numero2;
}

console.log(soma(3,5))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade)
{
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("André", 24))

function multiplica(numero1, numero2)
{
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3, 3)))