const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector('#submit-ans');
const outputElement = document.querySelector('#output');

const correctAnswer = ["90","Isosceles","Right"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()) {
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index + 1;
    }
    // console.log(score);
    outputElement.innerHTML = "Your Score is " + score;
}

submitAnsBtn.addEventListener('click',calculateScore);