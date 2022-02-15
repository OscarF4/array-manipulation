const numbers = [
    {
        name: 'Oscar',
        edad: 24
    },
    {
        name: 'Laura',
        edad: 24
    }
];

const rta = numbers.find(item => item.name === 'Oscar');
console.log(rta);