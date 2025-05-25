// Fetch API con Async/Await

const url = 'https://jsonplaceholder.typicode.com/comments';
// const consultarAPI = () => {
//     fetch(url)
//   .then(response => {
//     if(response.ok){
//         return response.json();
//     }
//     throw new Error('Hubo un error');
//   })
//   .then(data => {
//     console.log(data);
//   })
//     .catch(error => {
//         console.error(error.message);
//     });
// }

// consultarAPI();

// Fetch API con Async/Await
//Observa como cambiamos los then por await y el catch por try/catch
const consultarAPIAsync = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Hubo un error');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

consultarAPIAsync();