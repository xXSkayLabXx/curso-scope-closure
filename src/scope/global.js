// variables

var a;  //delcarando
var b = 'b'; //declaramos y asignamos
b = 'bb';  //reasignacion
var a = 'aa';  //redeclaracion


//global scope
var fruit = 'apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);

}

bestFruit();

function countries(){
    country = 'colombia'; //global
    console.log(country);

}

countries();
console.log(country);