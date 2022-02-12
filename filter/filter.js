// const words = ['Spray', 'Limit', 'Elite', 'Exuberant'];

// const rta = words.filter((item) => {
//     return item.length >= 6;
// });
// console.log(rta);

// const orders = [
//     {
//         customerName: 'Nicolas',
//         total: 60,
//         delivered: true
//     },
//     {
//         customerName: 'Zulma',
//         total: 120,
//         delivered: false
//     },
//     {
//         customerName: 'Santiago',
//         total: 180,
//         delivered: true
//     },
//     {
//         customerName: 'Valentina',
//         total: 240,
//         delivered: true
//     },
//     {
//         customerName: 'Nicolas',
//         total: 2000,
//         delivered: false
//     }
// ];

// const search = (query) => {
//     return orders.filter(item => {
//         return item.customerName.includes(query);
//     })
// }
// console.log(search('Nicolas'));


const buscador = document.querySelector("#buscador"); //Input type Text
const lista = document.querySelector("#lista"); //Div vacio
const nombres = ["Nicolas", "Nazareno", "Alvaro", "Cecilia", "Mariana", "Martin", "Jose", "Ariana", "Javier"];

const buscar = (input, array) => {
  console.log(input)
  

  const listaItems = array.filter(item => item.toLowerCase().includes(input.toLowerCase()));
  
  lista.innerText = listaItems;
}

buscador.addEventListener('input', () => buscar(buscador.value, nombres))