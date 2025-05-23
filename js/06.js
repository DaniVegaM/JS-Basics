// Objetos - Destructuring de 2 o mas objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: 'Juan',
    premium: true,
    direccion: {
        calle: 'Calle 123',
        colonia: 'Colonia 1',
    }
}

const { nombre } = producto;
const { nombre: nombreCliente, direccion: {calle} } = cliente;

console.log(nombre); // Tablet
console.log(nombreCliente); // Juan

console.log(calle); // Calle 123