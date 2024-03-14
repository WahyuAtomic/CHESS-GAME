//inserting the images
function insertImages() {
  document.querySelectorAll(".box").forEach((Image) => {
    if (Image.innerText.length !== 0) {
      if (Image.innerText == "Wpawn" || Image.innerText == "Bpawn") {
        Image.innerHTML = `${Image.innerText} <img class ='all-img all-pown' src="${Image.innerText}.png" alt="">`;
        Image.style.cursor = "pointer";
      } else {
        Image.innerHTML = `${Image.innerText} <img class ='all-img' src="${Image.innerText}.png" alt="">`;
        Image.style.cursor = "pointer";
      }
    }
  });
}
insertImages();

//Coloring the board

function Coloring() {
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
Coloring();

tog = 1;
document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", function () {
    if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length == 0
    ) {
      tog = tog + 1;
    } else if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length !== 0
    ) {
      document.querySelectorAll(".box").forEach((i) => {
        if (i.style.backgroundColor == "blue") {
          blueId = i.id;
          blueText = i.innerText;

          document.getElementById(blueId).innerText = "";
          item.innerText = blueText;
          Coloring();
          insertImages();
          tog = tog + 1;
        }
      });
    }

    getId = item.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    arr.push("0");
    aup = eval(arr.join(""));
    a = aside + aup;

    //function to display to available paths for all piaces

    function whosTurn(toggle) {
      // PAWN

      if (item.innerText == `${toggle}pawn`) {
        item.style.backgroundColor = "blue";

        if (tog % 2 !== 0 && aup < 800) {
          // First move for white pawns
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
            if (
              document.getElementById(`b${a + 200}`).innerText.length == 0 &&
              aup < 300
            ) {
              document.getElementById(`b${a + 200}`).style.backgroundColor =
                "greenyellow";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }

        if (tog % 2 == 0 && aup > 100) {
          // First move for black pawns
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
            if (
              document.getElementById(`b${a - 200}`).innerText.length == 0 &&
              aup > 600
            ) {
              document.getElementById(`b${a - 200}`).style.backgroundColor =
                "greenyellow";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        // Second move for pawns
        if (tog % 2 !== 0 && aup >= 800) {
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        if (tog % 2 == 0 && aup <= 100) {
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
      }
    }

    // Toggling the turn

    if (tog % 2 !== 0) {
      document.getElementById("tog").innerText = "White's Turn";
      whosTurn("W");
    }
    if (tog % 2 == 0) {
      document.getElementById("tog").innerText = "Black's Turn";
      whosTurn("B");
    }

    reddish();
  });
});

// Moving the element
document.querySelectorAll(".box").forEach((hathiTest) => {
  hathiTest.addEventListener("click", function () {
    if (hathiTest.style.backgroundColor == "blue") {
      blueId = hathiTest.id;
      blueText = hathiTest.innerText;

      document.querySelectorAll(".box").forEach((hathiTest2) => {
        hathiTest2.addEventListener("click", function () {
          if (
            hathiTest2.style.backgroundColor == "greenyellow" &&
            hathiTest2.innerText.length == 0
          ) {
            document.getElementById(blueId).innerText = "";
            hathiTest2.innerText = blueText;
            Coloring();
            insertImages();
          }
        });
      });
    }
  });
});
