const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(`Tecnología ${i + 1}: ${tecnologias[i]}`);
// }

//ForEach
tecnologias.forEach((tecnologia, index) => {
    console.log(`Tecnología ${index + 1}: ${tecnologia}`);
});

//Map
const tecnologiasMapeadas = tecnologias.map((tecnologia, index) => {
    return `Tecnología ${index + 1}: ${tecnologia}`;
});

console.log(tecnologiasMapeadas);

//Map crea un nuevo array con los resultados de la función aplicada a cada elemento del array original


//For ... of
for(let tech of tecnologias) {
    console.log(`Tecnología: ${tech}`);
}