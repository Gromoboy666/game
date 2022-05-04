var h = window.screen.availHeight;
var w = window.screen.availWidth;
array = [];
var MyNumber = getRandomInt(1, 15);
document.getElementById('MyNumber').innerHTML = Math.ceil(MyNumber);
var movesCounter = 0;
var moves = document.getElementById("moves");
var needNumber = document.getElementById("needNumber");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//Генерируем случайные числа и проверяем на 0
function check(){
  random = getRandomInt(-5, 8);
  while(!random){
    random = getRandomInt(-5, 8);
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
      console.log(MyNumber, "+", answer, "=", MyNumber + parseInt(answer))
      MyNumber += parseInt(answer);
      alert("Выполнено сложение!")
      
    } else if(random == 2) {
      console.log(MyNumber, "-", answer, "=", MyNumber - parseInt(answer))
      MyNumber -= parseInt(answer);
      alert("Выполнено вычитание!")
    } else if(random == 3) {
      console.log(MyNumber, "/", answer, "=", MyNumber / parseInt(answer))
      MyNumber /= parseInt(answer);

      alert("Выполнено деление!")
    } else if(random == 4) {
      console.log(MyNumber, "*", answer, "=", MyNumber * parseInt(answer))
      MyNumber *= parseInt(answer);
      alert("Выполнено умножение!")
    }
    MyNumber = Math.ceil(MyNumber);
    movesCounter+=1;
    moves.innerHTML = movesCounter;
  }
  document.getElementById('MyNumber').innerHTML = Math.ceil(MyNumber);
  generate()
  if (MyNumber == needNumber.innerHTML){
    alert("Вы победили! Число было изменено, можно продолжить игру")
    needNumber.innerHTML = getRandomInt(100, 1000);
  }
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
  needNumber.innerHTML = getRandomInt(100, 1000);
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
