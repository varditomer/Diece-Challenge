if (performance.getEntriesByType("navigation")[0].type === "reload") {
   // if the page has been refreshed, call the rollDice() function.
  myFunction();
}

function myFunction() {
  var wich1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var wich2 = Math.floor(Math.random() * 6) + 1; // 1-6

  if (wich1 > wich2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
  } else if (wich1 == wich2) {
    document.querySelector("h1").innerHTML = "Draw!"

  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
  }
  img1Src = "images/dice" + wich1 + ".png";
  img2Src = "images/dice" + wich2 + ".png";

  document.querySelector(".img1").src = img1Src;
  document.querySelector(".img2").src = img2Src;
}
