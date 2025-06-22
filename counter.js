let count = 0;
const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("value");

buttons.forEach(function (btn) {
  btn.addEventListener("click",   function (e){
    const action = e.target.classList;

    if (action.contains("minus")) {
      count--;
    } else if (action.contains("plus")) {
      count++;
    } else {
      count = 0;
  
}