// const letters = ['a','b','c'];

// //Good ol' For Loop
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     console.log('for', element);
// }

// //forEach() 
// letters.forEach(item => console.log('forEach', item));

// const products = [
//     { title: 'Burger', price: 40 },
//     { title: 'Pizza', price: 20 }
// ];
// const app = document.getElementById('app');
// products.forEach((product) => {
//     app.innerHTML += `<li>${product.title} - $${product.price}</li>`;
// });

const thingsToDo = [
    {
        title: 'Levantarme',
        done: true
    },
    {
        title: 'Estudiar',
        done: false
    },
    {
        title: 'Pajearme',
        done: true
    }
];
// const app = document.getElementById('app');
// thingsToDo.forEach(({ title, done }) => {
//     const elements = `
//     <li>
//         <input 
//             type= 'checkbox'
//             id= ${title}
//             ${done && 'checked'}
//         />
//         <label for= ${title}>${title}</label>
//     </li>`
//     app.innerHTML += elements;
// });

//Apend Way
const app = document.getElementById('app');
thingsToDo.forEach((el) => {
    const listItem = document.createElement('li');
    const taskLabel = document.createElement('label');
    const taskCheckbox = document.createElement('input');
    taskLabel.setAttribute('for', el.title);
    taskLabel.innerText = el.title;
    taskCheckbox.id = el.title;
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = el.done;
    listItem.append(taskLabel, taskCheckbox);
    app.appendChild(listItem);
});

