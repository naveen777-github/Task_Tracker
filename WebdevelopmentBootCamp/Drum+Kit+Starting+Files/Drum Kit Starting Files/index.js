let len = document.querySelectorAll(".drum").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        let a = new Audio("./sounds/tom-1.mp3");
        a.play();
        break;
      case "a":
        let b = new Audio("./sounds/tom-2.mp3");
        b.play();
        break;
      case "s":
        let c = new Audio("./sounds/tom-3.mp3");
        c.play();
        break;
      case "d":
        let d = new Audio("./sounds/tom-4.mp3");
        d.play();
        break;

      case "j":
        let e = new Audio("./sounds/crash.mp3");
        e.play();
        break;
      case "k":
        let f = new Audio("./sounds/kick-bass.mp3");
        f.play();
        break;
      case "l":
        let j = new Audio("./sounds/snare.mp3");
        j.play();
        break;
    }
  });
}

//let a = new Audio("./sounds/crash.mp3");
// a.play();
document.addEventListener("keydown", function (event) {
  let k = event.key;
  switch (k) {
    case "w":
      let a = new Audio("./sounds/tom-1.mp3");
      a.play();
      break;
    case "a":
      let b = new Audio("./sounds/tom-2.mp3");
      b.play();
      break;
    case "s":
      let c = new Audio("./sounds/tom-3.mp3");
      c.play();
      break;
    case "d":
      let d = new Audio("./sounds/tom-4.mp3");
      d.play();
      break;

    case "j":
      let e = new Audio("./sounds/crash.mp3");
      e.play();
      break;
    case "k":
      let f = new Audio("./sounds/kick-bass.mp3");
      f.play();
      break;
    case "l":
      let j = new Audio("./sounds/snare.mp3");
      j.play();
      break;
  }
});
