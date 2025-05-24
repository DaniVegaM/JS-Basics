//Function declaration

function sumar(){
    console.log(1+1);
}

sumar();
sumar();
sumar();
sumar();
sumar();



function sumar2(a, b){
    console.log(a + b);
}

sumar2(4, 10);
sumar2(10, 20);

//Function expression
const sumar3 = function(a, b) {
    console.log(a + b);
}

sumar3(5, 10);
sumar3(15, 20);

//La diferecia entre function declaration y function expression es que la primera se puede llamar antes de ser declarada, mientras que la segunda no.

//Arrow function

const sumar4 = (a, b) => {
    console.log(a + b);
}

sumar4(3, 7);
sumar4(8, 12);  

//Arrow function con un solo parámetro
const cuadrado = a => {
    console.log(a * a);
}

cuadrado(5);
cuadrado(10);

//Arrow function con un solo parámetro y una sola línea de código
const cuadrado2 = a => a * a;
console.log(cuadrado2(6));