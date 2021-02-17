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

//---------------------------------------------------------------------------//


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


//----------- retorna o resutado do calculo 

function multiplicarPorDois(valor){
    return valor* 2;
}

let resultado = multiplicarPorDois(5);

console.log(resultado);

//--------------------------------------------------------------------


//Operadores Aritiméticos ( operadores matemático +, -, *, / )


++ //operador aritimético de incremento 

-- // operador aritimético de decremento

let valorTeclado = 100;
valorTeclado += valorTeclado; 
console.log(valorTeclado);


//---------------------------------------------------------------------------
// Operador de igualdade

// Igualdade Estrita
console.log ( 1 === 1 ); // igual 3 vezes compara se é o mesmo valor e o mesmo tipo

//igualdade solta  
console.log ( '1' == 1); // igual 2 vezes ele compara apenas o valor, então é mais arriscado usar



//----------------------------------------------------------------


// Operador Ternario //


let pontos = 200; 
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);



// --------------------------------------------------------------


// Operador logico e (&&) 


console.log( true && true); // retorna true se os dois operandos forem true



// Operador logico barra barra OU ( || )


let maiorIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade || possuicarteiraDeTraalho


console.log(podeAplicar);



//----------------------------------------------------------------

// Operador NOT ( ! ) usado para fazer negação 


let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);



//------------------------------------------------------------------------


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



//----------------------------------------------------------------------------



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

//-----------------------------------------------------------------------------


// Laço for / while / do while / for in / for of /


for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo', i);
}

//-------------------------------------------------------------

// While Loop

let i =5;
while (i >=1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}



//----------------------------------------------------------------------

// Do Whille 


let i = 0;
do { 
    console.log('digitando', i);
    i++;
} while (i < 10)
--

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


//----------------------------------------------------------

// Escreva uma função que usa 2 numeros e retorna o maior entre eles 

let valorMaior = max(12,29);

console.log(valorMaior);

function max (numero1, numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

//--------------------------------

// Modo simplificado --------------------------------------------// ****** Aula 24

let valorMaior = max(12,29);

console.log(valorMaior);

function max (numero1, numero2) {
    return numero1 > numero2 ? numero1: numero2;
}

// usar var no escopo vai vazar para outro escopo por isso usamos o let dentro do for por exemplo 
// ----------------------------
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

// ---------------------------------------------------------------------------------
import React from 'react'

const Portfolio = () => {
    const [state] = React.useState([
        {id: 1, image: "/images/0001.jpg", name: 'Tunico', expert: 'Flutter'},
        {id: 2, image: "/images/k3.jpg", name: 'Antonio', expert: 'React'},
        {id: 3, image: "/images/0003.jpg", name: 'Maria', expert: 'Vue JS'},
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                <div className="row">
                <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6">Colaboradores</h6>
                        <h3 className="portfolio__content-h3">Nosso Time.</h3>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="portfolio__card-name">{user.name}</h5>
                            <p className="portfolio__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

// import React, {Component} from 'react';
// import './App.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"

// const photos = [
//   {
//   name: 'Photo 1',
//   url:"https://thumbs.web.sapo.io/?W=2100&H=0&delay_optim=1&epic=NTYw7Jr0joHC44+ELMuvsrCjXCJ22ZUZMO5+bVSlBmszchVhV1WuXyjHat2JreT6dFF4Gcx/glvAjS+y4CYfFrgIkbjR21fE/4n1XVWuNEAfv1g="
// },
//   {
//   name: 'Photo 2',
//   url:"https://www.atribuna.com.br/image/contentid/policy:1.99054:1588238667/Star-Wars-A-Ascens-o-Skywalker.jpeg?f=2x1&$p$f=6f75715&q=0.8&w=1500&$w=f075b93"
// },
//   {
//   name: 'Photo 3',
//   url:"https://www.plural.jor.br/wp-content/uploads/2019/12/star-wars-the-rise-of-skywalker-5df01f2e96eca.jpg"
// },
// ]


// class App extends Component{
//   render(){
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       arrows: true,
//       slidesToScroll: 1,
//       className:"slides"
    
//     }













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

//---------------------------------------------------------------------------//


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


//----------- retorna o resutado do calculo 

function multiplicarPorDois(valor){
    return valor* 2;
}

let resultado = multiplicarPorDois(5);

console.log(resultado);

//--------------------------------------------------------------------


//Operadores Aritiméticos ( operadores matemático +, -, *, / )


++ //operador aritimético de incremento 

-- // operador aritimético de decremento

let valorTeclado = 100;
valorTeclado += valorTeclado; 
console.log(valorTeclado);


//---------------------------------------------------------------------------
// Operador de igualdade

// Igualdade Estrita
console.log ( 1 === 1 ); // igual 3 vezes compara se é o mesmo valor e o mesmo tipo

//igualdade solta  
console.log ( '1' == 1); // igual 2 vezes ele compara apenas o valor, então é mais arriscado usar



//----------------------------------------------------------------


// Operador Ternario //


let pontos = 200; 
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);



// --------------------------------------------------------------


// Operador logico e (&&) 


console.log( true && true); // retorna true se os dois operandos forem true



// Operador logico barra barra OU ( || )


let maiorIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade || possuicarteiraDeTraalho


console.log(podeAplicar);



//----------------------------------------------------------------

// Operador NOT ( ! ) usado para fazer negação 


let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);



//------------------------------------------------------------------------


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



//----------------------------------------------------------------------------



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

//-----------------------------------------------------------------------------


// Laço for / while / do while / for in / for of /


for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo', i);
}

//-------------------------------------------------------------




