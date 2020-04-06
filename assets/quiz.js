var buttonEl = document.getElementById("startTestBtn");

var seconds = document.getElementById("timer").textContent;
var countDown = null;
var score = 0;
var answered = false;

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
        }, 5000);
    }
}


buttonEl.addEventListener("click", myCountDown); 
document.getElementById("AI1").addEventListener("click", AITest);
document.getElementById("AI2").addEventListener("click", AITest);
document.getElementById("AI3").addEventListener("click", AITest);