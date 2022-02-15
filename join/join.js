//For Loop, we can do it too
const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--'
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (i < (elements.length - 1)) {
        rtaFinal = rtaFinal + element + separator
    } else {
        rtaFinal = rtaFinal + element
    }
}
console.log('For Loop:', rtaFinal); //Fire--Air--Water

//Join() Method simplifies joining an Array into a String
const elements = ['Fire', 'Air', 'Water'];

const rta2 = elements.join('--');
console.log('Join() Method:', rta2); //Fire--Air--Water