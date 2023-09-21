// function changeText() {
//   var replaceText = document.getElementsByClassName("mini-text")[0];
//   var iconUp = document.getElementById("icon-up");
//   var iconDown = document.getElementById("icon-down");

//   if (replaceText.innerHTML === "Learn Basic Programming here") {
//     replaceText.innerHTML = "Scroll down";
//     iconUp.style.display = "none";
//     iconDown.style.display = "block";
//   } else {
//     replaceText.innerHTML = "Learn Basic Programming here";
//     iconUp.style.display = "block";
//     iconDown.style.display = "none";
//   }
// }

function changeText() {
    var replaceText = document.getElementsByClassName("mini-text")[0];
    var iconUp = document.getElementById("icon-up");
    var iconDown = document.getElementById("icon-down");
  
    if (replaceText.innerHTML === "Learn Basic Programming here") {
      replaceText.innerHTML = "Scroll down";
      iconUp.style.display = "none";
      iconDown.style.display = "block";
    } else {
      replaceText.innerHTML = "Learn Basic Programming here";
      iconUp.style.display = "block";
      iconDown.style.display = "none";
    }
  }
  
  function changeImage(element) {
    element.setAttribute("src", "assets/img-header2.png");
  }
  function changeImageBack(element) {
    element.setAttribute("src", "assets/img-header.png");
  } 
  