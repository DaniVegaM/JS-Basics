const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

const react = tecnologias[3];

//Destructuring en arrays lo hace en base a la posicion de los elementos
const [html, posicion2SOYCSS, js] = tecnologias;

console.log(html); // 'HTML'
console.log(posicion2SOYCSS); // 'CSS'
console.log(js); // 'JavaScript'

const [ , , , react2, node] = tecnologias;
console.log(react2); // 'React.js'
console.log(node); // 'Node.js'