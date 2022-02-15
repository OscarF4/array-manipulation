const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];

for (let i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    newArray.push(element);
}
console.log('For Loop:', newArray);


//Concat
const rta = elements.concat(otherElements);
console.log('Concat Method:', rta); //[1,1,2,2,3,3,4,4]

//Spread Concat: Only with Arrays, Strings return error
const rta2 = [...elements, ...otherElements];
console.log('... Method:', rta2); //[1,1,2,2,3,3,4,4]