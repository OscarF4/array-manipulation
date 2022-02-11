const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulma',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
]
console.log('Original:', orders);

const totalOfOrders = orders.map(item => item.total);
console.log('Mapped:', totalOfOrders);

// //--AQUI SE MODIFICA LA REFERENCIA (NO HACER)--
// const orderPlusTax = orders.map(item => {
//     item.tax = .19;
//     return item
// });
// console.log('Mapped plus tax:', orderPlusTax);
// console.log('Original:', orders);

const orderPlusTax = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
});
console.log('Mapped plus tax:', orderPlusTax);
console.log('Original:', orders);