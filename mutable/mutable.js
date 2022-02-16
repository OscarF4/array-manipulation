const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Busquedas
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Modificando objetos
const productsv2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
]
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productIndexv2 = productsv2.findIndex(item => item.id === update.id);

productsv2[productIndexv2] = {
    ...productsv2[productIndexv2],
    ...update.changes
}
console.log(productsv2);