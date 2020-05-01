var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

    //   ПЕРЕМЕННЫЕ
var ans = 2;


     //    IMAGES
const question = new Image();
question.src = "img/question.png";

    //  РАНДОМ ЧИСЕЛ
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
var first1 = getRandom(0, 10);
var first = Math.round(first1);

var second1 = getRandom(0, 10);
var second = Math.round(second1);


   //    ОТРИСОВКА
function draw(){
  ctx.clearRect(0,0,1000,500);
  ctx.font = "50px Arial";
  ctx.fillText(first,400,150,70);
  ctx.fillText(second,820,150,70);
  if (ans == 1){
    ctx.fillStyle = "green";
    ctx.fillText("правильно",550,200,200);
  } else if(ans == 0){
    ctx.fillStyle = "red";
    ctx.fillText("не правильно",550,200,200);
  } else if(ans == 2){
  ctx.drawImage(question,600,200,100,100)
  }
}

    //   ОТВЕТЫ
function more(){
  if (first > second){
    ans = 1;
  } else {
    ans = 0;
  }
}
function less(){
  if (first < second){
    ans = 1;
  } else {
    ans = 0;
  }
}

window.requestAnimationFrame(draw);
let game = setInterval(draw,20);//вызов функции каждые 100мс
