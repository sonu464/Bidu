let hemMenu = document.getElementById("hem-menu");
let hemburger = document.querySelector(".hemburger");
let crosshem = document.querySelector(".crosshem");

function hemLine() {
    hemMenu.style.display = "block";
    hemburger.style.display = "none";
    crosshem.style.display = "block";
}

function cross() {
    crosshem.style.display = "none";
    hemburger.style.display = "block";
    hemMenu.style.display = "none";
}   
