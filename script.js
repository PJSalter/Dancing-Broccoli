const pressMeBroccoli = document.querySelector(".btn");
const broccoli = document.querySelector(".broccoli");
const textThatBroccoli = document.querySelector(".btn span");
const shadowThoseGreens = document.querySelector(".shadow");

function broccoliMilkDance() {
  if (broccoli.classList.contains("anime")) {
    broccoli.classList.remove("anime");
    shadowThoseGreens.classList.remove("animeShadow");
    textThatBroccoli.innerText = "Broccoli milk anyone?";
  } else {
    broccoli.classList.add("anime");
    shadowThoseGreens.classList.add("animeShadow");
    textThatBroccoli.innerText = "can't milk this";
  }
}

pressMeBroccoli.addEventListener("click", broccoliMilkDance);
