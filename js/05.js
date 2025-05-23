// Objetos - Manipulacion

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

Object.freeze(producto); //Congela el objeto, no se pueden modificar, agregar o eliminar sus propiedades
console.log(producto); //{ nombre: 'Tablet', precio: 300, disponible: false }

Object.seal(producto); //Sella el objeto, no se pueden agregar propiedades, pero si modificar o eliminar
console.log(producto); //{ nombre: 'Tablet', precio: 300, disponible: false }

producto.disponible = true; //Modificamos el valor de la propiedad disponible
console.log(producto); //{ nombre: 'Tablet', precio: 300, disponible: true }
console.log(producto.disponible); //true

// NOTA: Cuando tienes un objeto creado con const, no puedes volver a asignar el objeto a otro valor, pero si puedes modificar sus propiedades.


// Agregar propiedades a un objeto
producto.imagen = 'imagen.jpg'; //Agregamos una propiedad al objeto
console.log(producto); //{ nombre: 'Tablet', precio: 300, disponible: true, imagen: 'imagen.jpg' }

// Eliminar propiedades de un objeto
delete producto.disponible; //Eliminamos la propiedad disponible
console.log(producto); //{ nombre: 'Tablet', precio: 300, imagen: 'imagen.jpg' }