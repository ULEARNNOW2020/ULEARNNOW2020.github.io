var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

loader = document.getElementsByClassName('loading')[0];
rules = document.getElementsByClassName('rules')[0];

 function start(){
     rules.style.display = 'none'; // скрываем .rules
     ans = 2;
 }

 function loading() {
  setTimeout(function() {
    loader.style.display = 'none'; // скрываем .loader
    rules.style.display = 'block';
  }, 3000); // зарежка перед скрытием в миллисекундах
}

    //   ПЕРЕМЕННЫЕ
var time = 100;
var ans = 5;
var tim = 0.9;
var lvl = 1;
var next = 100;
var true1 = 0;
var false1 = 0;
var lost = 0;
var pmX = 30;
var pmY = 30;
var pmXX = 740;
var pmYY = 170;
var score = 0;
var star1 = 138;
var star2 = 138;
var star3 = 138;

    //    AUDIO

    var soundBT = new Audio();
    function playSound(){
        soundBT.src = "audio/btn.mp3";
        soundBT.volume = 0.3;
        soundBT.pause();
        soundBT.currentTime = 0;
        soundBT.play();
    }

     //    IMAGES
const question = new Image();
question.src = "img/question.png";

const bg = new Image();
bg.src = "img/bg.png";

const passed = new Image();
passed.src = "img/passed.png";

const star = new Image();
star.src = "img/star.png";

const missed = new Image();
missed.src = "img/missed.png";

const timeBar = new Image();
timeBar.src = "img/time.png";

const fr1 = new Image();
const fr2 = new Image();


    //  РАНДОМ ЧИСЕЛ
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var first1 = getRandom(0, 10);
var second1 = getRandom(0, 10);
var frut1 = getRandom(0, 7);
var frut21 = getRandom(0, 7);

var frut = Math.round(frut1);
var frut2 = Math.round(frut21);
var first = Math.round(first1);
var second = Math.round(second1);



   //    ОТРИСОВКА
function draw(){
  if (frut == 0){
    fr1.src = "img/fruits/app.png";
    fr2.src = "img/fruits/vin.png";
  } else if (frut == 1){
    fr1.src = "img/fruits/bak.png";
    fr2.src = "img/fruits/app.png";
  } else if (frut == 2){
    fr1.src = "img/fruits/banan.png";
    fr2.src = "img/fruits/bak.png";
  } else if (frut == 3){
    fr1.src = "img/fruits/grush.png";
    fr2.src = "img/fruits/banan.png";
  } else if (frut == 4){
    fr1.src = "img/fruits/klub.png";
    fr2.src = "img/fruits/grush.png";
  } else if (frut == 5){
    fr1.src = "img/fruits/orang.png";
    fr2.src = "img/fruits/klub.png";
  } else if (frut == 6){
    fr1.src = "img/fruits/pom.png";
    fr2.src = "img/fruits/orang.png";
  } else if (frut == 7){
    fr1.src = "img/fruits/vin.png";
    fr2.src = "img/fruits/pom.png";
  }



  ctx.clearRect(0,0,1500,500);
  ctx.drawImage(bg,0,0,1260,620);
  ctx.drawImage(timeBar,0,0,score/50,103,60,210,score/235,56); //1200 255
  ctx.drawImage(fr1,467,100,160,170);
  ctx.drawImage(fr2,860,100,160,170);
  ctx.fillStyle = "black";
  ctx.font = "50px Arial black";
  ctx.fillText(first,527,205,90);
  ctx.fillText(second,917,205,90);
  ctx.fillStyle = "blue";
  ctx.fillText(Math.round(score/24),175,70,150);
  ctx.fillStyle = "red";
  ctx.drawImage(timeBar,0,0,time*13,50,-10,-15,time*14,36);
  ctx.fillStyle = "green";
  ctx.fillText(Math.round(true1),200,337,90);
  ctx.fillStyle = "red";
  ctx.fillText(Math.round(false1),200,420,90);

if (lvl != 31){
  if(ans == 2){
    pmX=30;
    pmY=30;
    pmXX = 740;
    pmYY = 170;
  ctx.drawImage(question,700,150,100,100)
  time=time-tim;
} else if (ans == 1){
    for(var cycle=0;cycle<100;cycle=cycle+0.03){
      pmX=pmX+0.001;
      pmY=pmY+0.001;
      pmXX=pmXX-0.0005;
      pmYY=pmYY-0.0005;
    }
    ctx.drawImage(passed,pmXX,pmYY,pmX,pmY);
    next = next - 3;
    score = score+40*tim;
  } else if(ans == 0){
    for(var cycle=0;cycle<100;cycle=cycle+0.03){
      pmX=pmX+0.001;
      pmY=pmY+0.001;
      pmXX=pmXX-0.0005;
      pmYY=pmYY-0.0005;
    }
    ctx.drawImage(missed,pmXX,pmYY,pmX,pmY);
    next = next - 3;
  }  else if(ans==3){
  for(var cycle=0;cycle<100;cycle=cycle+0.03){
    pmX=pmX+0.001;
    pmY=pmY+0.001;
    pmXX=pmXX-0.0005;
    pmYY=pmYY-0.0005;
  }
  ctx.drawImage(missed,pmXX,pmYY,pmX,pmY);
  next = next - 3;
}

 if(time<0){
   time=0;
 }
 if (time==0){
   ans=3;
 }
 if (next <= 0){
   restart();
 }
  if (lvl != 31){
 if (ans == 1){
   true1 = true1 + 0.0303;
 } else if(ans == 0){
   false1 = false1 + 0.0303;
 }  else if(ans==3){
   lost = lost + 0.0303;
   false1 = false1 + 0.0303;
}}
}

if (true1 >= 13){
  ctx.drawImage(star,124,star1,50,91);
  if (star1 <= 163){
    star1 = star1 + 0.68;
  }
}
if (true1 >= 20){
  ctx.drawImage(star,193,star2,50,91);
  if (star2 <= 163){
    star2 = star2 + 0.68;
  }
}
if (true1 >= 27){
  ctx.drawImage(star,265,star3,50,91);
  if (star3 <= 163){
    star3 = star3 + 0.68;
  }
}}


function restart(){
  lvl++;
  if (lvl != 31){
  frut1 = getRandom(0, 7);
  frut21 = getRandom(0, 7);
  frut = Math.round(frut1);
  frut2 = Math.round(frut21);
  ans = 2;
  tim=tim+0.04;
  time=100;
  if (lvl < 10){
    first1 = getRandom(0, 10);
    second1 = getRandom(0, 10);
  } else if(lvl > 9 && lvl < 20){
    first1 = getRandom(10, 99);
    second1 = getRandom(10, 99);
  } else if(lvl > 19){
    first1 = getRandom(100, 999);
    second1 = getRandom(100, 999);
  }
  first = Math.round(first1);
  second = Math.round(second1);
  next = 100;
} else {

}

  }

    //   ОТВЕТЫ
function more(){
  if (ans == 2){
  if (first > second & time > 0){
    ans = 1;
  } else {
    ans = 0;
  }}
}
function less(){
  if (ans == 2){
  if (first < second & time > 0){
    ans = 1;
  } else {
    ans = 0;
  }}
}
function ravno(){
    if (ans == 2){
  if (first==second & time > 0){
    ans = 1;
  } else {
    ans = 0;
  }}
  }




window.requestAnimationFrame(draw);
let game = setInterval(draw,50);//вызов функции каждые 20мс
