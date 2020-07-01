var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = -540;
var z = 0;

var soundBT = new Audio();
function playSound(){
    soundBT.src = "audio/btn.mp3";
    soundBT.volume = 0.3;
    soundBT.pause();
    soundBT.currentTime = 0;
    soundBT.play();
}

//    IMAGES
const bg = new Image();
bg.src = "img/bg.png";

const bg2 = new Image();
bg2.src = "img/bg2.png";

const lp = new Image();
lp.src = "img/lp.png";

function draw(){
  ctx.drawImage(bg,x,0,2400,649);
  ctx.drawImage(bg2,460,190,370,370);
  ctx.drawImage(lp,445,10,380,170);
  if (z == 0){
    x = x + 0.5;
  }
  if (x > 0){
    z = 1;
  }
  if (z == 1){
    x = x - 0.5;
  }
  if (x < -1050){
    z = 0;
  }
}

window.requestAnimationFrame(draw);
let game = setInterval(draw,20);//вызов функции каждые 20мс
