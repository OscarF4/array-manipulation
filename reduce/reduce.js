//Vamos a implementar un flujo creíble de trabajo

//1. Array de las ordenes del mes
const ordenesFebrero = [
    {
        cliente: 'Pedro Sanchez',
        valor: 18000,
        medioDePago: 'Efectivo'
    },
    {
        cliente: 'Maritza Rodriguez',
        valor: 52500,
        medioDePago: 'Efectivo'
    },
    {
        cliente: 'Fabian Porras',
        valor: 65000,
        medioDePago: 'Efectivo'
    },
    {
        cliente: 'Robinson Guerra',
        valor: 11200,
        medioDePago: 'Efectivo'
    }
];

//2. Mapeamos para solo tener los valores de las ordenes
const valoresVentas = ordenesFebrero.map(item => item.valor);
console.log(valoresVentas);

//3. Reduce() para sacar el total de ventas del mes

const ventasTotalesFebrero = valoresVentas.reduce((sum, element) => {
    return sum + element;
}, 0);
console.log(ventasTotalesFebrero);