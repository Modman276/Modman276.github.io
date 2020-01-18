var darlingKeys = {
  68: 'd',
  65: 'a',
  82: 'r',
  76: 'l',
  73: 'i',
  78: 'n',
  71: 'g'
};
var darlingCode = ['d', 'a', 'r', 'l', 'i', 'n', 'g'];
var darlingCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = darlingKeys[e.keyCode];
  var requiredKey = darlingCode[darlingCodePosition];

  if (key == requiredKey) {

    darlingCodePosition++;

    if (darlingCodePosition == darlingCode.length) {
      darlingCodePassed();
      darlingCodePosition = 0;
    }
  } else {
    darlingCodePosition = 0;
  }
});

function darlingCodePassed() {
  var audio2 = new Audio('Index/media/darling.mp3');
  audio2.play();

  audio2.onended=function(){
    Array.from(document.querySelectorAll("body")).forEach(el => el.classList.toggle("darling"));
    Array.from(document.querySelectorAll("body")).forEach(el => el.classList.remove("konami"));
    Array.from(document.querySelectorAll(".text1")).forEach(el => el.classList.add("transparent"));
    Array.from(document.querySelectorAll(".text2")).forEach(el => el.classList.add("pink"));
    Array.from(document.querySelectorAll(".button1")).forEach(el => el.classList.add("pink"));
    Array.from(document.querySelectorAll(".btn")).forEach(el => el.classList.add("pink"));
    Array.from(document.querySelectorAll(".menubtn")).forEach(el => el.classList.add("pink"));
    Array.from(document.querySelectorAll("li a")).forEach(el => el.classList.add("pink"));
    alert("Darling I found you!");
 }
}