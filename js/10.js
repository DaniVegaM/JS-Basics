const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

tecnologias[4] = 'Express.js'; // Modificar el elemento en la posición 4
tecnologias[5] = 'MongoDB'; // Agregar un nuevo elemento en la posición 5
tecnologias[10] = 'GraphQL'; // Agregar un nuevo elemento en la posición 10 (vacío hasta ahora)
console.table(tecnologias);

//Array methods
// Añadir un elemento al final del array
tecnologias.push('TypeScript');

//Push no se suele usar con REACT porque muta
//Lo correcto seria generar un nuevo array
const nuevasTecnologias = [...tecnologias, 'TypeScript'];
console.table(nuevasTecnologias);

// Añadir un elemento al principio del array
tecnologias.unshift('Vue.js');
console.table(tecnologias);

// Eliminar el último elemento del array
tecnologias.pop();

console.table(tecnologias);

// Eliminar el primer elemento del array
tecnologias.shift();

//EN REACT para eliminar seria asi:

const tecnologias2 = tecnologias.filter(function(tech){
    if (tech != 'HTML'){ //Pone todas las tecnologias excepto HTML
        return tech;
    }
})

console.table(tecnologias2);


//Para modificar un elemento en un array
const tecnologias3 = tecnologias.map(function(tech){
    if(tech === 'CSS') {
        return 'Sass'; // Cambia CSS por Sass
    } else{
        return tech; // Deja el resto igual
    }
})

console.table(tecnologias3);

//La diferencia entre filter y map es que filter devuelve un array con los elementos que cumplen la condición, mientras que map devuelve un array con los elementos modificados según la función que se le pase.