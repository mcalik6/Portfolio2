let quizanswers = document.getElementById("quizanswers");
let scoreDisplay = document.getElementById("score");

quizanswers.addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;

    let a1Answer = document.querySelector("input[name=a1]:checked")
    if (a1Answer && a1Answer.value === "2"){
        score++;
    }

    let a2Answer = document.querySelector("input[name=a2]:checked")
    if (a2Answer && a2Answer.value === "2"){
        score++;
    }

    let a3Answer = document.querySelector("input[name=a3]:checked")
    if (a3Answer && a3Answer.value === "2"){
        score++;
    }

    let a4Answer = document.querySelector("input[name=a4]:checked")
    if (a4Answer && a4Answer.value === "1"){
        score++;
    }

    let a5Answer = document.querySelector("input[name=a5]:checked")
    if (a5Answer && a5Answer.value === "0"){
        score++;
    }

    scoreDisplay.innerHTML = `Your score : ${score}`;
});