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

//FindIdex()
const rta2 = numbers.findIndex(item => item.name === 'Laura');
console.log(rta2);