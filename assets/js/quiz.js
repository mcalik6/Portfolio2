let quizanswers = document.getElementById("quizanswers");
let scoreDisplay = document.getElementById("score");

quizanswers.addEventListener("submit",function(event)){
    event.preventDefault();
let score=0;

let a1Answer =document.querySelector("input[name=a1]:checked")
if (a1Answer && a1Answer.value === "2"){
    score++;
}

scoreDisplay.innerHTML = `Your score:${score}`;


}