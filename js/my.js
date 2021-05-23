var h = window.screen.availHeight;
var w = window.screen.availWidth;
array = [];
var MyNumber = 1;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//Генерируем случайные числа и проверяем на 0
function check(){
  random = getRandomInt(-5, 5);
  while(!random){
    random = getRandomInt(-5, 5);
  }
}
// Меняем ответы
function generate(){
  check()
  document.getElementById('answer-1').innerHTML = random;
  check()
  document.getElementById('answer-2').innerHTML = random;
  check()
  document.getElementById('answer-3').innerHTML = random;
  check()
  document.getElementById('answer-4').innerHTML = random;

}

// Выбираем знак и меняем наше число

function sign(answer){
  if (answer != 0){
    random = getRandomInt(1, 5);
    if(random == 1){
      MyNumber += parseInt(answer);
    } else if(random == 2) {
      MyNumber -= parseInt(answer);
    } else if(random == 3) {
      MyNumber /= parseInt(answer);
    } else if(random == 4) {
      MyNumber *= parseInt(answer);
    }
}
  document.getElementById('MyNumber').innerHTML = Math.floor(MyNumber);
  generate()
}


function move1() {
  sign(document.getElementById('answer-1').innerHTML)
}
function move2() {
  sign(document.getElementById('answer-2').innerHTML)
}
function move3() {
  sign(document.getElementById('answer-3').innerHTML)
}
function move4() {
  sign(document.getElementById('answer-4').innerHTML)
}

function init(){
  generate();
  var but1 = document.getElementById('but-1');
  var but2 = document.getElementById('but-2');
  var but3 = document.getElementById('but-3');
  var but4 = document.getElementById('but-4');
  but1.onclick = move1;
  but2.onclick = move2;
  but3.onclick = move3;
  but4.onclick = move4;
}

window.onload = init;