const quizForm = document.querySelector(`#quizanswers`);
const scoreDisplay = document.querySelector(`#score`);

const answers = [`2`, `2`, `0`, `1`];

quizForm.addEventListener(`submit`, (event) => {
    event.preventDefault()
    let score = 0 ;



const userAnswers = [
    quizForm.elements[`a1`].value,
    quizForm.elements[`a2`].value,
    quizForm.elements[`a3`].value,
    quizForm.elements[`a4`].value,
];

userAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
        score += 1 ;
    }
});

scoreDisplay.innerHTML = `YOure score: ${score}`;
console.log(`User answer`, userAnswers);
console.log(`Correct answers`, answers);
console.log(`Score`, score);
})