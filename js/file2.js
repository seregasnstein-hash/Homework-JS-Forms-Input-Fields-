const circles = document.querySelectorAll(".circle");
const btnNext = document.querySelector(".btn");

console.log(circles);
console.log(btnNext);
const arrColors = ["red", "yellow", "green"];
let i = 0;

btnNext.addEventListener("click", () => {
  circles.forEach((elem, index) => {
    if (index === i) {
      elem.style.backgroundColor = arrColors[i];
    } else {
      elem.style.backgroundColor = "rgb(206, 206, 206)";
    }
  });
  i++;
  if (i >= circles.length) {
    i = 0;
  }
});
