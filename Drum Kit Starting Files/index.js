function handleClick() {
  switch (this.innerHTML) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      this.style.color = "white";
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      this.style.color = "white";
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      this.style.color = "white";
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      this.style.color = "white";
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      this.style.color = "white";
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      this.style.color = "white";
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      this.style.color = "white";
      kick.play();
      break;

    default:
      break;
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}