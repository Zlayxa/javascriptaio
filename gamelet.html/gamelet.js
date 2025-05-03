const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  } //Makes the ball move left by 10 pixels with the left arrow key.
  if (e.code === "KeyA") {
    position = position - 10;
  } // makes the ball move left by 10 pixels with the 'a' key.
  if (e.code === "ArrowRight") {
    position = position + 10;
  } // makes the ball move right by 10 pixels with the right arrow key.
  if (e.code === "KeyD") {
    position = position + 10;
  } // makes the ball move right by 10 pixels with the 'd' key.
  if (e.code === "ArrowUp") {
    position = position;
  } // Can't figure out how to move the ball up with the arrow key.
  if (e.code === "ArrowDown") {
    position = position;
  } // Can't figure out how to move the ball down with the arrow key.
  if (position < 0) {
    position = 0;
  } /* Pretty sure this resets the position of the ball on page reload, that or it stops the ball making a streak across the page. */
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
}
