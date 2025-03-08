const colorSpan = document.querySelector(".color");
const buttonCl = document.querySelector(".change-color");


buttonCl.addEventListener("click", (event) => {
  const randomColors = getRandomHexColor();

  document.body.style.backgroundColor = randomColors;
  colorSpan.textContent = randomColors;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}