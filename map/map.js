// const letters = ['a','b','c'];

// const newArray = letters.map(item => item + '++');

// console.log('Original', letters);
// console.log('new', newArray);

const products = [
    {
        title: 'Burguer', price: 40
    },
    {
        title: 'Pizza', price: 20
    }
];
const app = document.getElementById('app');
const list = products.map(product => {
    return `<li>${product.title} - ${product.price}</li>`
});
app.innerHTML = list.join('');