var min = 1;
var max = 12;
var random1 = Math.floor(Math.random() * (+max - +min) + +min);
var random2 = Math.floor(Math.random() * (+max - +min) + +min);
var first = document.getElementById("first_num");
var second = document.getElementById("second_num");
first.innerHTML = random1;
second.innerHTML = random2;
var checkButton = document.getElementById("checkButton");
var correctAnswer = false;


function newCard() {
    var result = document.getElementById("result");
    var userAnswer = document.getElementById("answer");
    random1 = Math.floor(Math.random() * (+max - +min) + +min); 
    random2 = Math.floor(Math.random() * (+max - +min) + +min); 
    first.innerHTML = random1; 
    second.innerHTML = random2; 
    result.innerHTML = "&nbsp;";
    correctAnswer = false;
    checkButton.value = "Check"
    userAnswer.value = "";
}

function checkAnswer() {
    if (correctAnswer) {
        newCard();
    } else {
        var userAnswer = document.getElementById("answer").value;
        var result = document.getElementById("result");
        if (userAnswer == (random1 * random2)) {
            result.innerHTML = "CORRECT!!!"; 
	    correctAnswer = true;
	    checkButton.value = "Next";
        } else {
            result.innerHTML = "Try again"; 
        } 
    }
}
