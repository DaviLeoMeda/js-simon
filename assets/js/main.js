

// creiamo la funzione per ottenere i numeri randomici

function numeriPc(max, min) {
    return Math.floor(Math.random() * max) + min;
}


let numberPlace = document.getElementById("numbersHere");
let start = document.getElementById("start");

let arrayCPU = [];

start.addEventListener("click", function () {

    let numbSequen = setInterval(function () {

        let numCpu = numeriPc(100, 1);
        numberPlace.innerHTML += `<li> ${numCpu}</li>`;
        arrayCPU.push(numCpu);
        console.log(numCpu);

    }, 1000);



    setTimeout(function () {
        clearInterval(numbSequen);

    }, 5000)
    console.log(array);
})