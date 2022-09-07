let yourScore = 0;
let highScore = 0;
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

    // Hide Click Me
document.getElementById('click-btn').style.display = "none";

makeBox();


}