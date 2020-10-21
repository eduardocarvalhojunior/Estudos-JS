//function declaration

function sayHello() //sem parametro
{
    console.log('Hello') //Função declarada mas não invocada
}

sayHello() //Função invocada apenas com os () 

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Eduardo')