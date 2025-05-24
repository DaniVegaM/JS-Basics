//Arrays o arreglos

const tecnologias = [20, 30, 40]

console.log(tecnologias);
console.table(tecnologias);
console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[2]);
console.log(tecnologias[3]); // undefined, no existe el elemento en esa posicion

// En js puedes mezclar tipos de datos en un array
const tecnologias2 = [20, "30", true, null, undefined, {id: 1}, [1, 2, 3]];
console.log(tecnologias2);

