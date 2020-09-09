let firstPerson = document.querySelector('#firstPerson');
let secondPerson = document.querySelector('#secondPerson');

let calcBtn = document.querySelector('#calcBtn')

let yourNameDisp = document.querySelector('#yourName');
let partnerNameDisp = document.querySelector('#partnerName');

let resultPercent = document.querySelector('#resultPercent');

let progressBarDiv = document.querySelector('.progress-div')
let progressBar = document.querySelector('.progress-bar');

calcBtn.addEventListener('click', loveCalculator);

function loveCalculator() {
    if (firstPerson.value == '') {
        alert('please enter your name!');
    } else if (secondPerson == '') {
        alert('please enter your partner name!');
    } else {

        yourNameDisp.innerHTML = firstPerson.value + " <span class='text-danger'>loves</span>";
        partnerNameDisp.innerHTML = '&nbsp' + secondPerson.value;

        let result = calculate(75, 100);

        resultPercent.innerHTML = result + "<span style='font-size:40px;'>%</span>"

        calcBtn.remove();

        progressBarDiv.style.border = "1px solid grey"
        progressBar.style.width = result + "%";

    }
}

function calculate(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.querySelector('#author').innerHTML = "by crazy programmer"
