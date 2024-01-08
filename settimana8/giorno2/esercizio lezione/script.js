let palla = document.getElementById("palla");
let increasePoints = document.getElementById("number");
let points = 0;
let x = 100
let y = -10;
let speed = 50;
let loop = setInterval(move, speed);
losing = 0;

function gestPoints() {
    points++;
    
    increasePoints.innerHTML = points;
    
    
    loop = setInterval(move, speed);
    speed+=1;
    y=-10;
    
}

function move() {

    // x = Math.floor(Math.random() * 900)

    palla.style.left = x + "px";

    if (y == 85) {
        losing++;
        clearInterval(loop);
        y = -10;
        loop = setInterval(move, speed);
    } if (losing >= 5) {
        clearInterval(loop);
        let welcome =  document.getElementById("welcome");
        welcome.innerHTML = `hai perso, ${points} punti.`;
        
        let playAgain = document.createElement("button");
        playAgain.innerHTML = "PLAY AGAIN";
        playAgain.style.backgroundColor = "green";
        
        welcome.appendChild(playAgain);
        playAgain.onclick = function () {
            points=0;
            losing = 0;
            loop = setInterval(move, speed);
            welcome.innerHTML = "RIPROVA DAI";
        };        
    }
    palla.style.top =y+"%";
    y+=1;
}