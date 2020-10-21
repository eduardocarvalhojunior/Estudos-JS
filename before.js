//function declaration

function sayHello() //sem parametro
{
    console.log('Hello') //Função declarada mas não invocada
}

sayHello() //Função invocada apenas com os () 

function sayHelloTo(name) {
    console.log('Hello ' + name)
    console.log(`Hello ${name}!`) // Interpolação usa-se crases `` e crifrão $ com chaves {...}
}

sayHelloTo('Eduardo')


function returHi (){ //Função não recebe parametro mas retorna um valor, no caso o HI
    return 'Hi'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi()) //chamando a função diretamente dentro do console.log


function returnHiTo(name) { //Função que recebe parametro e returna algo 
    return `Hi ${name}!`
}

console.log(returnHiTo('Junior'))