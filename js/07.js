// Objetos - Unir 2 o mas objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: 'Juan',
    premium: true
}


const carrito = {
    cantidad: 1,
    producto // pone el objecto denntro del otro objeto
}

const carrito2 = {
    cantidad: 1,
    ...producto // une el objeto producto dentro del objeto carrito //SE llama spread operator
    // ...cliente // une el objeto cliente dentro del objeto carrito
}


console.log(carrito); // { cantidad: 1, producto: { nombre: 'Tablet', precio: 300, disponible: false } }
console.log(carrito2); // { cantidad: 1, nombre: 'Tablet', precio: 300, disponible: false }


const nuevoObjeto = { //aca como producto y cliente tienen el mismo nombre, se sobreescriben
    ...producto,
    ...cliente
}

//Tambien podemos usar Object.assign
const nuevoObjeto2 = Object.assign(producto, cliente)

console.log(nuevoObjeto2); // { nombre: 'Juan', premium: true, precio: 300, disponible: false }