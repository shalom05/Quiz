const words = ["Random", "Estudiar", "Comer"]
let select_words = ("");

const palabra = document.querySelector ("h2");
console.log(palabra)
const tries = document.querySelector (".intentos");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.querySelector("#Random").addEventListener("click", () => {
    getRandomInt(Math.random());
});

palabra.textContent = words[0]


const input1 = document.getElementById ("input1");
const input2 = document.getElementById ("input2");
const input3 = document.getElementById ("input3");
const input4 = document.getElementById ("input4");
const input5 = document.getElementById ("input5");