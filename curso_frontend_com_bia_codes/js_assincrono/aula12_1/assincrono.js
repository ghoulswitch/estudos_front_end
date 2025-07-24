// function generateArray(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }

// async function slowFunction() {
//     const array = generateArray(1, 40000000);
//     const inputNumber = document.querySelector('input').value;
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] + inputNumber / inputNumber);
//     }

//     const finished = document.createElement('h2');
//     finished.innerText = 'Terminou!';
//     document.body.appendChild(finished);
// }

// async function handleClick() {
//     slowFunction();
// }

const tittle = document.querySelector('h1');

//o h1 será alterado após 5 segundos, porém o texto já mudará para vermelho imediatamente
setTimeout(() => {
    tittle.textContent = 'Título mudou!'
}, 5000);
tittle.style.color = 'red';