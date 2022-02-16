// const matriz = [
//     [1,2,3],
//     [4,5,6, [1,2, [1,2]]],
//     [7,8,9]
// ];

// function aplanarMatriz(matriz) {
//     let arrayFinal = [];
//     for (element of matriz) {
//         if (Array.isArray(element)) {
//             arrayFinal = arrayFinal.concat(aplanarMatriz(element));
//         } else {
//             arrayFinal.push(element);
//         }
//     }
//     return arrayFinal;
// }
// console.log(aplanarMatriz(matriz));

const matrix = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function flatMatrix(list) {
    let flatNewArray = [];

    if (typeof list != 'object') {
        flatNewArray.push(list);
    } else {
        list.forEach((element) => {
            flatNewArray = flatNewArray.concat(flatMatrix(element));
        });
    }
    return flatNewArray
}

//Flat()
const arrayFinalFlat = matriz.flat(9);
console.log(arrayFinalFlat);
