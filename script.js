let hemburger = document.querySelector('.hemburger');
let line = document.querySelector('.line');
let navigation = document.getElementById('navigation');
let hemburger1 = document.querySelector('.hemburger1');
let navRight = document.querySelector('.nav-right');
let navSection = document.querySelector('.nav-section');


function hem() {
  navigation.style.height="100vh";
  navigation.style.transition="all 1s";
  hemburger.style.display= "none";
  hemburger1.style.display= "flex";
 }

function cros(){
  navSection.style.height= "10vh";
  // navSection.style.display= "none";
  navigation.style.transition="all 1s";
}

