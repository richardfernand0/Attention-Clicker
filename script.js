let yourScore = 0;
let highScore = [];
let scoreHistory = 0;
let timer = new Date();
let createdTime = 0;
let clickTimer = 0;
loadTime = timer.getTime();


function makeBox() {

    var time=Math.random();

    time=time*5000;

       setTimeout(function() {


// Show Click Me
document.getElementById('click-btn').style.display = "flex";

           createdTime=Date.now();
           console.log(createdTime);

       }, time);

}

function ClickFunction() {
    // console.log(createdTime);

    let clickTimer = Date.now();



    // clickTime = clickTimer.getTime();


    yourScore = clickTimer - createdTime;

    let seconds = ((yourScore % 60000) / 1000).toFixed(2);


    // console.log(yourScore);


    document.getElementById('your-score-time').innerHTML = seconds + "s";

    highScore.push(seconds);

    fastestTime = Math.min(...highScore);
    document.getElementById('high-score-item').innerHTML = fastestTime + "s";


    if (seconds == fastestTime) {

        document.getElementById('message-section').innerHTML = "Congratulation you got High Score!";

        setTimeout(function(){

            document.getElementById('message-section').innerHTML = "";
        }, 1000);


    };


    // Loop HighScore
    // for (i=0; i<highScore.length; i++) {
    //     console.log(highScore[i]);
    // }



    // Hide Click Me
document.getElementById('click-btn').style.display = "none";

makeBox();


}