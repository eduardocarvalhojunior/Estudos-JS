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

sayHelloTo('junior')


function returHi (){ //Função não recebe parametro mas retorna um valor, no caso o HI
    return 'Hi'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi()) //chamando a função diretamente dentro do console.log


function returnHiTo(name) { //Função que recebe parametro e returna algo 
    return `Hi ${name}!`
}

console.log(returnHiTo('Edu'))



var; let; // variaveis que armazenam valores que podem ser alterados apenas chamando pelo nome usando = e novo valor

const; // variavel constante, que armazena valor que não pode ser alterada ou redefinida.

// tipos primitivos // objeto de valor

let nome = 'Eduardo 7718'; // string literal  

let idade = 28; // number literal

let estaAprovado = true; //boolean 

let corselecionada = null // para redefinir uma opção no site/sistema



// objeto tipo referencia // 

Object; // junta varios valores ou informações em um unico objeto ou escopo

let pessoa = {
    nome: 'Eduardo 7718',
    idade: 28,
    estaAprovado: true,
};

console.log(pessoa);

Array; // conjunto de dados que pode ser acessado por um indice que sempre começa a contar do 0 (zero)

let familia = [ 26, 44, 50, 'Edu']; 

console.log(familia[3]); // vai imprimir Edu // 


function; 
