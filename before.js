//function declaration


// Como declarar uma variavel : VAR / LET / CONST 

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

//-------------------------------------------------------------//


let corSite = "azul";
function reseraCor(cor,tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);

// tem dois tipo de função : a que realiza uma tarefa/comando e aque não faz nada 


function dizerNome(){
    console.log('Edu');
}
dizerNome();


//----------- retorna o resutdo do calculo 

function multiplicarPorDois(valor){
    return valor* 2;
}

let resultado = multiplicarPorDois(5);

console.log(resultado);

//---------------------------------------------------------


//Operadores Aritiméticos ( operadores matemático +, -, *, / )


++ //operador aritimético de incremento 

-- // operador aritimético de decremento

let valorTeclado = 100;
valorTeclado += valorTeclado; 
console.log(valorTeclado);


//----------------------------------------------------------------

// Operador de igualdade

// Igualdade Estrita
console.log ( 1 === 1 ); // igual 3 vezes compara se é o mesmo valor e o mesmo tipo

//igualdade solta  
console.log ( '1' == 1); // igual 2 vezes ele compara apenas o valor, então é mais arriscado usar



//-------------------------------------------------------


// Operador Ternario //


let pontos = 200; 
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);



// ----------------------------------------------------------------


// Operador logico e (&&) 


console.log( true && true); // retorna true se os dois operandos forem true



// Operador logico barra barra OU ( || )


let maiorIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade || possuicarteiraDeTraalho


console.log(podeAplicar);



//---------------------

// Operador NOT ( ! ) usado para fazer negação 


let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);



//-----------------------------------------------------------------


// Condicionais -> Temos dois tipos : If / Else e temos o Switch / Case



let hora = 22;

if (hora > 6 && hora < 12) {
    console.log("Bom dia");
}

else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
}
else{
    console.log("Boa noite");
}



//------------------------------------------------------------------



switch (permissao) {
    case 'comum':
    console.log('usuario comum');
    break; // para não continuar comparando com as condições abaixo//

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('usuario desconhecido');
}

//---------------------------------------


// Laço for / while / do while / for in / for of /


for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo', i);
}

//----------------------------

// While Loop

let i =5;
while (i >=1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}



//------------------------------------------------------------------

// Do Whille 


let i = 0;
do { 
    console.log('digitando', i);
    i++;
} while (i < 10)

//---------------------------

// Loop For In 


const pessoa = {
    nome: 'Eduardo',
    idade: 28
};

for (let chave in pessoa) {
    console.log(chave,pessoa['nome']);

}

const cores = ['vermelho', 'azul'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

// For Of 

const cores = [ 'Vermelho','Azul', 'Verde'];

for(let cor of cores) {
    console.log(cor);

}


//---------------------------------------------------------------------------

// Escreva uma função que usa 2 numeros e retorna o maior entre eles 

let valorMaior = max(12,29);

console.log(valorMaior);

function max (numero1, numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

//---------------------------------------------------------------

// Modo simplificado --------------------------------------------// ****** Aula 24

let valorMaior = max(12,29);

console.log(valorMaior);

function max (numero1, numero2) {
    return numero1 > numero2 ? numero1: numero2;
}

// usar var no escopo vai vazar para outro escopo por isso usamos o let dentro do for por exemplo 
// ---------------------------------------
// FizzBuzz --> compara valore baseado no parametro de entrada

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}           

// ---------------------------------------------------------------------
