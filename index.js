//detecting button
for(var i=0; i< document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{
  var btninnerHTML = this.innerHTML;
  makesound(btninnerHTML);
   animation(btninnerHTML);
});
}
//detecting keyboard
document.addEventListener("keypress",function(event){
 makesound(event.key);
 animation(key);
});

function makesound(key){
switch (key){
  case "s":
  var crash = new Audio('crash.mp3');
  crash.play();
  break;
  case "a":
  var tom3 = new Audio('tom-3.mp3');
  tom3.play();
  break;
  case "m":
  var snare = new Audio('snare.mp3');
  snare.play();
  break;
  case "i":
  var tom1 = new Audio('tom-1.mp3');
  tom1.play();
  break;
  case "t":
  var tom2 = new Audio('tom-2.mp3');
  tom2.play();
  break;

default:
console.log(btninnerHTML);
}
}

function animation(currentkey){
  var activebtn= document.querySelector("." +currentkey);
  activebtn.classList.add("pressed");

  setTimeout(function(){
    activebtn.classList.remove("pressed");

  },100);
}
