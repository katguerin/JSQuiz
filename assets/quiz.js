var buttonEl = document.getElementById("startTestBtn");

var seconds = document.getElementById("timer").textContent;
var countDown = null;

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


buttonEl.addEventListener("click", myCountDown); 
