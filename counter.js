let count = 0;
const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("value");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const action = e.target.classList;

    if (action.contains("minus")) {
      count--;
    } else if (action.contains("plus")) {
      count++;
    } else if (action.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#333";
    }

    value.textContent = count;
  });
});
