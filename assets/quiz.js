var buttonEl = document.getElementById("startTestBtn");
var seconds = document.getElementById("timer").textContent;
var countDown = null;
var score = 0;
var answered = false;
var scoreBoard = 0;

function myCountDown() {
    if (countDown==null) {
        countDown = setInterval(myCountDown, 1000);
        document.getElementById("start").className = "hidden";
        document.getElementById("questionOne").classList.remove("hidden");
    }
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds<=0){
        clearInterval(countDown);
        document.getElementById("questionOne").className = "hidden";
        document.getElementById("questionTwo").className = "hidden";
        document.getElementById("questionThree").className = "hidden";
        document.getElementById("finalScore").textContent = score;
        document.getElementById("endOfTest").classList.remove("hidden");
    }
}

function AITest(event) {
    console.log(event.target.id);
    if (answered == false){
        if (event.target.id == "AI2") {
          score++;
            document.getElementById("AI-answer").textContent = "CORRECT!";
        }
        else {
           seconds = seconds - 5;
           document.getElementById("AI-answer").textContent = "WRONG! YOU LOSE 5 seconds!";
        }
        answered = true;
        setTimeout(function(){
            document.getElementById("questionOne").className = "hidden";
            document.getElementById("questionTwo").classList.remove("hidden");
            answered = false;
        }, 2000);
    }
}

function AITest2(event) {
    console.log(event.target.id);
    if (answered == false){
        if (event.target.id == "AI5") {
          score++;
            document.getElementById("AI2-answer").textContent = "CORRECT!";
        }
        else {
           seconds = seconds - 5;
           document.getElementById("AI2-answer").textContent = "WRONG! YOU LOSE 5 seconds!";
        }
        answered = true;
        setTimeout(function(){
            document.getElementById("questionTwo").className = "hidden";
            document.getElementById("questionThree").classList.remove("hidden");
            answered = false;
        }, 2000);
    }
}

function AITest3(event) {
    console.log(event.target.id);
    if (answered == false){
        if (event.target.id == "AI7") {
          score++;
            document.getElementById("AI3-answer").textContent = "CORRECT!";
        }
        else {
           seconds = seconds - 5;
           document.getElementById("AI3-answer").textContent = "WRONG! YOU LOSE 5 seconds!";
        }
        answered = true;
        setTimeout(function(){
            document.getElementById("questionThree").className = "hidden";
            document.getElementById("endOfTest").classList.remove("hidden");
            answered = false;
            document.getElementById("finalScore").textContent = score;
        }, 2000);
    }
}

function endOfTest(event) {
        if (document.getElementById("initials").value == "" ) {
            alert("You must enter some initials");
        }  else {
            var myInitials = document.getElementById("initials").value;
            var highScore = document.createElement("p");
            highScore.innerHTML = myInitials+ " - " + score;
            document.getElementById("highScores").appendChild(highScore);
            document.getElementById("endOfTest").className = "hidden";
            document.getElementById("scoreBoard").classList.remove("hidden");
        } 

}


buttonEl.addEventListener("click", myCountDown); 
document.getElementById("AI1").addEventListener("click", AITest);
document.getElementById("AI2").addEventListener("click", AITest);
document.getElementById("AI3").addEventListener("click", AITest);

buttonEl.addEventListener("click", myCountDown); 
document.getElementById("AI4").addEventListener("click", AITest2);
document.getElementById("AI5").addEventListener("click", AITest2);
document.getElementById("AI6").addEventListener("click", AITest2);

buttonEl.addEventListener("click", myCountDown); 
document.getElementById("AI7").addEventListener("click", AITest3);
document.getElementById("AI8").addEventListener("click", AITest3);
document.getElementById("AI9").addEventListener("click", AITest3);

document.getElementById("submitInitials").addEventListener("click", endOfTest);