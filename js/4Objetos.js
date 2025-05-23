//Objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            alto: '1m',
            ancho: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto); //{ nombre: 'Monitor 20 pulgadas', precio: 300, disponible: true, informacion: { medidas: [Object], fabricacion: [Object] } }
console.log(typeof producto); //object
console.table(producto); //{ nombre: 'Monitor 20 pulgadas', precio: 300, disponible: true, informacion: { medidas: [Object], fabricacion: [Object] } }
console.log(producto.nombre); //Monitor 20 pulgadas


const nombre = producto.nombre;
console.log(nombre); //Monitor 20 pulgadas

//Destructuring
const { nombre: nombreProducto, precio, disponible } = producto; //Aca con los dos puntos le cambiamos el nombre a la variable
console.log(nombreProducto); //Monitor 20 pulgadas
console.log(precio); //300
console.log(disponible); //true

//Object Literal Enhancement
//Esto es util para funciones
const autenticado = true;
const usuario = "Dani";
const nuevoObjeto = {
    autenticado, //No es necesario poner el nombre de la variable
    usuario
}

console.log(nuevoObjeto); //{ autenticado: true, usuario: 'Dani' }