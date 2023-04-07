

// creiamo la funzione per ottenere i numeri randomici

function numeriPc(max, min) {
    return Math.floor(Math.random() * max) + min;
}


let numberPlace = document.getElementById("numbersHere");
let start = document.getElementById("start");



start.addEventListener("click", function () {

    let arrayCPU = [];
    let arrayHuman = [];

    let numbSequen = setInterval(function () {

        let numCpu = numeriPc(100, 1);


        if (!arrayCPU.includes(numCpu)) {
            arrayCPU.push(numCpu);
            numberPlace.innerHTML += `<li> ${numCpu}</li>`;
        }
        console.log(arrayCPU);


        // return arrayCPU


    }, 1000);



    setTimeout(function () {
        clearInterval(numbSequen);
    }, 5000)


    // let numberHuman = setInterval(function () {




    // }, 8000);


    setTimeout(function () {

        numberPlace.innerHTML = ``;

        // let numbSequenSecond = setInterval(function () {

        //     for (i = 0; i <= 0; i++) {
        //         numbersHere.innerHTML += `<li>Qui inserisci i numeri visti prima <input class="inputHuman" type="number"></li>`
        //     }

        // }, 1000)

        // setTimeout(function () {
        //     clearInterval(numbSequenSecond)
        //     numbersHere.innerHTML += `<div><button id="sendNumb">Send</button></div>`

        //     sendNumb.addEventListener("click", function () {
        //         let numbersHuman = document.querySelector('.inputHuman')
        //         console.log(numbersHuman.value)
        //     })
        // }, 5000)
        for (let i = 0; i < arrayCPU.length; i++) {
            numbersHere.innerHTML += `<li>Qui inserisci i numeri visti prima <input class="inputHuman${i}" type="number"></li>`
        }
        numbersHere.innerHTML += `<div><button id="sendNumb">Send</button></div>`

        sendNumb.addEventListener("click", function () {
            let numbersHuman = document.getElementsByClassName("inputHuman").value;

            // if (!arrayHuman.includes(numbersHuman)) {
            //     arrayHuman.push(numbersHuman);




            console.log(numbersHuman)
        })


    }, 8000);











    // while (arrayCPU.length < 5) {

    //     let numHuman = prompt ("Inserisci il numero dei 5");

    //     arrayHuman.push(numHuman);

    //     return arrayHuman;
    // }


})

