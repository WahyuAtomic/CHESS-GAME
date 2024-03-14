//Coloring the board
function coloring() {
  const color = document.querySelectorAll(".box");

  color.forEach((color) => {
    getId = color.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    aup = eval(arr.shift());
    a = aside + aup;

    if (a % 2 == 0) {
      color.style.backgroundColor = "rgb(232 235 239)";
    }
    if (a % 2 !== 0) {
      color.style.backgroundColor = "rgb(125 135 150)";
    }
  });
}
