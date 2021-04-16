const colorBox = document.querySelector(".color-box"),
  colorBtn = document.querySelectorAll(".color");

colorBtn.forEach(function (color) {
  color.addEventListener("mouseup", function (e) {
    const color = e.target;
    colorBox.style.backgroundColor = window
      .getComputedStyle(color, null)
      .getPropertyValue("background-color");
  });
});
