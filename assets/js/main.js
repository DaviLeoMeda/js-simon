

// creiamo la funzione per ottenere i numeri randomici

function numeriPc(max, min) {
    Math.floor(Math.random() * max) + min;
}

let numCpu = numeriPc(5, 1);
let numberPlace = document.getElementById("numberHere");

array = [];

start.addEventListener("click", function () {

    let numbSequen = setInterval(function () {

        numbersHere.innerHTML += `<li> ${numCpu}</li>`;

    }, 1000);
    console.log(numCpu);

    setTimeout(function () {
        clearInterval(numbSequen);

    }, 5000)
})