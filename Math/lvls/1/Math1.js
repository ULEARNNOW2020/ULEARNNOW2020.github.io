var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

    //   ПЕРЕМЕННЫЕ
var ans = 2;
var time = 100;
var tim = 0.4;
var lvl = 1;

     //    IMAGES
const question = new Image();
question.src = "img/question.png";

const bg = new Image();
bg.src = "img/bg.png";

const fr1 = new Image();
const fr2 = new Image();


    //  РАНДОМ ЧИСЕЛ
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var first1 = getRandom(0, 10);
var second1 = getRandom(0, 10);
var frut1 = getRandom(0, 8);
var frut21 = getRandom(0, 8);

var frut = Math.round(frut1);
var frut2 = Math.round(frut21);
var first = Math.round(first1);
var second = Math.round(second1);



   //    ОТРИСОВКА
function draw(){
  ctx.clearRect(0,0,1500,500);
  ctx.drawImage(bg,0,0,3000,3000);
  ctx.drawImage(fr1,367,50,160,170);
  ctx.drawImage(fr2,760,50,160,170);
  ctx.fillStyle = "black";
  ctx.font = "50px Arial";
  ctx.fillText(first,430,150,90);
  ctx.fillText(second,820,150,90);
  ctx.fillStyle = "red";
  ctx.fillRect(5,5,time*13,10);
  if (ans == 1){
    ctx.fillStyle = "green";
    ctx.fillText("правильно",540,200,300);
  } else if(ans == 0){
    ctx.fillStyle = "red";
    ctx.fillText("не правильно",500,200,300);
  } else if(ans == 2){
  ctx.drawImage(question,600,100,100,100)
  time=time-tim;
} else if(ans==3){
  ctx.fillStyle = "red";
  ctx.fillText("вы не успели",500,200,300);
}

 if(time<0){
   time=0;
 }
 if (time==0){
   ans=3;
 }

 if (frut == 0){
   fr1.src = "img/fruits/app.png";
 } else if (frut == 1){
   fr1.src = "img/fruits/bak.png";
 } else if (frut == 2){
   fr1.src = "img/fruits/banan.png";
 } else if (frut == 3){
   fr1.src = "img/fruits/grush.png";
 } else if (frut == 4){
   fr1.src = "img/fruits/klub.png";
 } else if (frut == 5){
   fr1.src = "img/fruits/orang.png";
 } else if (frut == 6){
   fr1.src = "img/fruits/pom.png";
 } else if (frut == 7){
   fr1.src = "img/fruits/vin.png";
 }

 if (frut2 == 0){
   fr2.src = "img/fruits/app.png";
 } else if (frut2 == 1){
   fr2.src = "img/fruits/bak.png";
 } else if (frut2 == 2){
   fr2.src = "img/fruits/banan.png";
 } else if (frut2 == 3){
   fr2.src = "img/fruits/grush.png";
 } else if (frut2 == 4){
   fr2.src = "img/fruits/klub.png";
 } else if (frut2 == 5){
   fr2.src = "img/fruits/orang.png";
 } else if (frut2 == 6){
   fr2.src = "img/fruits/pom.png";
 } else if (frut2 == 7){
   fr2.src = "img/fruits/vin.png";
 }
}

function restart(){
  ans = 2;
  tim=tim+0.05;
  lvl++;
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

  frut1 = getRandom(0, 8);
  frut21 = getRandom(0, 8);
  frut = Math.round(frut1);
  frut2 = Math.round(frut21);
}

    //   ОТВЕТЫ
function more(){
  if (first > second && time > 0 && ans == 2){
    ans = 1;
  } else {
    if(ans == 2){
    ans = 0;
    }
  }
}
function less(){
  if (first < second && time > 0 && ans == 2){
    ans = 1;
  } else {
    if(ans == 2){
    ans = 0;
    }
  }
}
function ravno(){
  if (first==second && time > 0 && ans == 2){
    ans = 1;
  } else {
    if(ans == 2){
    ans = 0;
    }
  }
}

window.requestAnimationFrame(draw);
let game = setInterval(draw,20);//вызов функции каждые 20мс
