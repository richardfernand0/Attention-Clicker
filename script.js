let yourScore = 0;
let highScore = [];
let scoreHistory = 0;
let timer = new Date();
let createdTime = 0;
let clickTimer = 0;
let correctClick = false;
let wrongClick = false;
loadTime = timer.getTime();



function makeBox() {

    var time = Math.random();

    time = time * 5000;

    setTimeout(function () {

        // Show Click Me
        document.getElementById('click-btn').style.display = "flex";
        createdTime = Date.now();

    }, time);

}

function ClickFunction() {

    let clickTimer = Date.now();

    yourScore = clickTimer - createdTime;

    let seconds = ((yourScore % 60000) / 1000).toFixed(2);

    document.getElementById('your-score-time').innerHTML = seconds + "s";

    highScore.push(seconds);

    fastestTime = Math.min(...highScore);
    document.getElementById('high-score-item').innerHTML = fastestTime + "s";


    if (seconds == fastestTime) {

        document.getElementById('message-section').innerHTML = "Congratulation you got High Score!";

        setTimeout(function () {

            document.getElementById('message-section').innerHTML = "";
        }, 1000);


    };


    // Hide Click Me
    document.getElementById('click-btn').style.display = "none";

    makeBox();

}


