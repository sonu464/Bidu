let hemburger = document.querySelector('.hemburger');
let line = document.querySelector('.line');
let navigation = document.getElementById('navigation');
let hemburger1 = document.querySelector('.hemburger1');
let navRight = document.querySelector('.nav-right');



function hem() { 
 if(navigation.style.height== "flex"){
  navigation.style.height="100vh";
  navigation.style.transition="all 1s";
  hemburger.style.display= "none";
  hemburger1.style.display= "flex";
 }
}

function cros(){
  navigation.style.height= "50px";
  navigation.style.transition="all 1s";
}

