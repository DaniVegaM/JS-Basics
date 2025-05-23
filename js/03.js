//Tipos de datos
/*
Comentario de varias lineas
*/

//Undefined
let client;
console.log(client); //undefined
console.log(typeof client); //undefined


//Strings
let nombre = "Dani";
console.log(nombre); //Dani
console.log(typeof nombre); //string

let producto = 'Monitor 20 pulgadas';
console.log(producto); //Monitor 20 pulgadas
console.log(typeof producto); //string

//Numbers
let numero = 20;
let numero2 = 20.5;
let numero3 = -20;

//BigInt
let numeroGrande = BigInt(9007199254740991);
let numeroGrande2 = 9007199254740991n; //sufijo n
console.log(numeroGrande); //9007199254740991n
console.log(typeof numeroGrande); //bigint

//Boolean
let booleano1 = true;
let booleano2 = false;
console.log(booleano1); //true
console.log(booleano2); //false
console.log(typeof booleano1); //boolean
console.log(typeof booleano2); //boolean

//Null
const descuento = null;
console.log(descuento); //null

//Null requiere que se asigne y no es nada, y undefined es que no se ha asignado nada

//Symbol
const sym1 = Symbol(30);
const sym2 = Symbol(30);
console.log(sym1); //Symbol(30)
console.log(sym2); //Symbol(30)
console.log(sym1 === sym2); //false
//Los simbolos son un tipo de dato primitivo que es unico y no se puede repetir
//Se utilizan para crear identificadores unicos
//Se utilizan para crear propiedades de objetos unicas