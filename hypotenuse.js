const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-button');
const outputElement = document.querySelector('#output');

function calculateSumOfSquares(a,b) {
    const sum = Math.pow(a,2) + Math.pow(b,2); 
    return sum;
}

function calculateHypotenuse() {
    const sumOfSquares =  calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const length = Math.sqrt(sumOfSquares);
    outputElement.innerText = "The length of hypotenuse is " +  length;
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);