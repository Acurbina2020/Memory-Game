function countdown() {
  var timer = 5;
  var items = document.querySelectorAll(".square, .redSquare");
  var display = setInterval(function () {
    if (timer <= 0) {
      clearInterval(display);
      document.getElementById("countdown-display").innerHTML =
        "Find the red squares!";
      btnSquare1.addEventListener("click", checkSquare1);
      btnSquare2.addEventListener("click", checkSquare2);
      btnSquare3.addEventListener("click", checkSquare3);
      btnSquare4.addEventListener("click", checkSquare4);
      btnSquare5.addEventListener("click", checkSquare5);
      btnSquare6.addEventListener("click", checkSquare6);
      btnSquare7.addEventListener("click", checkSquare7);
      btnSquare8.addEventListener("click", checkSquare8);
      btnSquare9.addEventListener("click", checkSquare9);
      btnSquare10.addEventListener("click", checkSquare10);
      btnSquare11.addEventListener("click", checkSquare11);
      btnSquare12.addEventListener("click", checkSquare12);
      btnSquare13.addEventListener("click", checkSquare13);
      btnSquare14.addEventListener("click", checkSquare14);
      btnSquare15.addEventListener("click", checkSquare15);
      btnSquare16.addEventListener("click", checkSquare16);

      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("whiteSquare");
      }
    } else {
      document.getElementById("countdown-display").innerHTML =
        timer + " seconds remaining";
    }
    timer -= 1;
  }, 1000);

  var x = document
    .getElementById("square-container")
    .querySelectorAll(".square");

  var n;
  var r = [];
  for (n = 1; n <= 16; ++n) {
    var i = Math.floor(Math.random() * (17 - n));
    r.push(x[i]);
    x[i] = x[17 - n];
    x[i].classList.remove("square");
    x[i].classList.add("redSquare");
  }
}

function checkSquare1() {
  var getSquare = document.getElementById("squareClick1").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare2() {
  var getSquare = document.getElementById("squareClick2").classList;

  getSquare.remove("whiteSquare");
  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }

  result();
}

function checkSquare3() {
  var getSquare = document.getElementById("squareClick3").classList;
  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare4() {
  var getSquare = document.getElementById("squareClick4").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare5() {
  var getSquare = document.getElementById("squareClick5").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare6() {
  var getSquare = document.getElementById("squareClick6").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare7() {
  var getSquare = document.getElementById("squareClick7").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare8() {
  var getSquare = document.getElementById("squareClick8").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare9() {
  var getSquare = document.getElementById("squareClick9").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare10() {
  var getSquare = document.getElementById("squareClick10").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare11() {
  var getSquare = document.getElementById("squareClick11").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare12() {
  var getSquare = document.getElementById("squareClick12").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare13() {
  var getSquare = document.getElementById("squareClick13").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare14() {
  var getSquare = document.getElementById("squareClick14").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare15() {
  var getSquare = document.getElementById("squareClick15").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function checkSquare16() {
  var getSquare = document.getElementById("squareClick16").classList;

  getSquare.remove("whiteSquare");

  if (getSquare.contains("square")) {
    alert("You lose!");
    window.location.reload();
  }
  if (getSquare.contains("redSquare")) {
    getSquare.add("Checked");
  }
  result();
}

function result() {
  var redSquares = document.querySelectorAll(".redSquare").length;
  var checkedSquares = document.querySelectorAll(".Checked").length;
  if (redSquares == checkedSquares) {
    alert("You win!");
    window.location.reload();
  }
}

var btnStart = document.getElementById("countdown-button");
var btnReset = document.getElementById("reset-button");
var btnSquare1 = document.getElementById("squareClick1");
var btnSquare2 = document.getElementById("squareClick2");
var btnSquare3 = document.getElementById("squareClick3");
var btnSquare4 = document.getElementById("squareClick4");
var btnSquare5 = document.getElementById("squareClick5");
var btnSquare6 = document.getElementById("squareClick6");
var btnSquare7 = document.getElementById("squareClick7");
var btnSquare8 = document.getElementById("squareClick8");
var btnSquare9 = document.getElementById("squareClick9");
var btnSquare10 = document.getElementById("squareClick10");
var btnSquare11 = document.getElementById("squareClick11");
var btnSquare12 = document.getElementById("squareClick12");
var btnSquare13 = document.getElementById("squareClick13");
var btnSquare14 = document.getElementById("squareClick14");
var btnSquare15 = document.getElementById("squareClick15");
var btnSquare16 = document.getElementById("squareClick16");

function disableButton() {
  btnStart.disabled = true;
}
function reset() {
  window.location.reload();
}

btnStart.addEventListener("click", disableButton);
btnStart.addEventListener("click", countdown);
btnReset.addEventListener("click", reset);
