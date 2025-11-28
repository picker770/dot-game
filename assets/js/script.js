// KEYBOARD CONTROLS:
document.addEventListener("keydown", moveByKeyboardInput);
function moveByKeyboardInput(e) {
  const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

  if (allowedKeys.includes(e.key)) {
    e.preventDefault();

    switch (e.key) {
      case "ArrowUp":
        move("up");
        break;
      case "ArrowDown":
        move("down");
        break;
      case "ArrowLeft":
        move("left");
        break;
      case "ArrowRight":
        move("right");
        break;
    }
  }
}

// BUTTON CLICKS

const buttons = document.querySelectorAll("#buttons button");

for (let button of buttons) {
  button.addEventListener("click", moveByButtonClick);
}

function moveByButtonClick(e) {
  let direction = e.target.getAttribute("data-direction");
  move(direction);
}

// FUNCTION TO MOVE PLAYER - DO NOT CHANGE!
function move(direction) {
  let player = document.getElementById("player");
  let currentTopPx = parseFloat(player.style.top);
  let currentLeftPx = parseFloat(player.style.left);

  switch (direction) {
    case "up":
      currentTopPx -= 12.5;
      break;
    case "down":
      currentTopPx += 12.5;
      break;
    case "left":
      currentLeftPx -= 12.5;
      break;
    case "right":
      currentLeftPx += 12.5;
      break;
    default:
      alert("Not a valid input");
  }

  player.style.top = currentTopPx.toFixed(1) + "px";
  player.style.left = currentLeftPx + "px";
}
