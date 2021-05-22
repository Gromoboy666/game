var h = window.screen.availHeight;
var w = window.screen.availWidth;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function move1() {
  MyNumber = document.getElementById('MyNumber').innerHTML = "34";
}
function move2() {
  MyNumber = document.getElementById('MyNumber').innerHTML = "34";
}
function move3() {
  MyNumber = document.getElementById('MyNumber').innerHTML = "34";
}
function move4() {
  MyNumber = document.getElementById('MyNumber').innerHTML = "34";
}

function init(){
  random = getRandomInt(-5, 5);
  document.getElementById('answer-1').innerHTML = random;

  random = getRandomInt(-5, 5);
  document.getElementById('answer-2').innerHTML = random;

  random = getRandomInt(-5, 5);
  document.getElementById('answer-3').innerHTML = random;

  random = getRandomInt(-5, 5);
  document.getElementById('answer-4').innerHTML = random;
  var but1 = document.getElementById('but-1');
  var but2 = document.getElementById('but-2');
  var but3 = document.getElementById('but-3');
  var but4 = document.getElementById('but-4');
  document.getElementById('answer-1').innerHTML = random;
  but1.onclick = move;
}

window.onload = init;