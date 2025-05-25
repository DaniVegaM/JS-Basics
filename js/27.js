// Performance y multiple async await
const url = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/comments';

const consultarAPIAsync = async () => {
    try {
        const inicio = performance.now();
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Hubo un error');
        }
        const data = await response.json();
        console.log(data);
        const fin = performance.now();

        console.log(`Tiempo de ejecución: ${fin - inicio} ms`);
    } catch (error) {
        console.error(error.message);
    }
}

consultarAPIAsync();

// PAra solucuionar el problema de performance, podemos hacer las peticiones en paralelo
const consultarAPIAsyncMultiple = async () => {
    try {
        const inicio = performance.now();
        
        const [response1, response2] = await Promise.all([ // Hacemos las peticiones en paralelo
            fetch(url),
            fetch(url2)
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error('Hubo un error');
        }

        const [data1, data2] = await Promise.all([
            response1.json(),
            response2.json()
        ]);

        console.log(data1);
        console.log(data2);

        const fin = performance.now();
        console.log(`Tiempo de ejecución: ${fin - inicio} ms`);
    } catch (error) {
        console.error(error.message);
    }
}