var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

    //   ПЕРЕМЕННЫЕ
var ans = 2;
var time = 100;

     //    IMAGES
const question = new Image();
question.src = "img/question.png";

    //  РАНДОМ ЧИСЕЛ
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
var first1 = getRandom(100, 999);
var first = Math.round(first1);
var second1 = getRandom(100, 999);
var second = Math.round(second1);



   //    ОТРИСОВКА
function draw(){
  ctx.fillStyle = "black";
  ctx.clearRect(0,0,1500,500);
  ctx.font = "50px Arial";
  ctx.fillText(first,400,150,90);
  ctx.fillText(second,820,150,90);
  ctx.fillStyle = "red";
  ctx.fillRect(5,5,time*13,10);
  if (ans == 1){
    ctx.fillStyle = "green";
    ctx.fillText("правильно",550,200,300);
  } else if(ans == 0){
    ctx.fillStyle = "red";
    ctx.fillText("не правильно",550,200,300);
  } else if(ans == 2){
  ctx.drawImage(question,600,200,100,100)
  time=time-0.4;
} else if(ans==3){
  ctx.fillStyle = "red";
  ctx.fillText("вы не успели",550,200,300);
}


 if(time<0){
   time=0;
 }
 if (time==0){
   ans=3;
 }
}

function restart(){
  ans = 2;
  time=100;
  first1 = getRandom(100, 999);
  first = Math.round(first1);
  second1 = getRandom(100, 999);
  second = Math.round(second1);
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
