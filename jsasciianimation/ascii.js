"use strict";
(function(){
window.onload = function () {


  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  document.getElementById("button2").disabled = true;


  document.getElementById("sizes").onchange= changeSize;
  document.getElementById("turbo").onchange= changeSpeed;


  button1.onclick = startAnimation;
  button2.onclick = stopAnimation;


}
var runner=null;
var speed=250;
var text="";
var animationChosen="Blank";
function startAnimation() {
  animationChosen =  document.getElementById("animations").value;
  let animationArray = ANIMATIONS[animationChosen].split("=====");
  var i=0;
  //enable stop
  document.getElementById("button2").disabled = false;
  //save typed text before viewing the animation
  text= document.getElementById("txt").value;
  

  runner= setInterval(output, speed);
  document.getElementById("button1").disabled = true;
  document.getElementById("animations").disabled = true;


  function output() {
  
    if (i < (animationArray.length - 1)) {
      i = i + 1;
    } else if (i === (animationArray.length - 1)) {
      i = 0;
    }
    document.getElementById("txt").value = animationArray[i];
  }
}
function stopAnimation(){
  clearInterval(runner);
  document.getElementById("button1").disabled = false;
  document.getElementById("animations").disabled = false;
  document.getElementById("button2").disabled = true;

  document.getElementById("txt").value = text;

  
}

function changeSize(){
  document.getElementById("txt").style.fontSize= document.getElementById("sizes").value ;
}

function changeSpeed(){
  if(document.getElementById("turbo").checked){
    speed=50;
  }else{
    speed=250;
  }
}
})();

