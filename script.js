let hemburger = document.querySelector('.hemburger');
let line = document.querySelector('.line');
let navigation = document.getElementById('navigation');
let cross = document.getElementById('cross');
function hem() { 

  navigation.style.height="100vh";
  navigation.style.transition="all 1s";
  hemburger.style.display= "none";
  cross.style.display= "block";
}


function cross(){
  navigation.element.classList.toggle("mystyle");
}
