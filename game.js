const WIDTH = 7;
const HEIGHT = 5;
const DIFFICULTY = 5;
let steps = 0;

document.querySelector(".game").addEventListener("click", handleClick);
randomBoard();

// random number from 0 to max (excluding)
function randomNumber(max = 1) {
  return Math.floor(Math.random() * max)
}

function randomBoard() {
  for (let i = 0; i < DIFFICULTY; i++) {
    toggleCellAndNeighbors(randomNumber(HEIGHT), randomNumber(WIDTH));
  }
}

function toggleCell(y ,x) {
  if ((x >= 0 && x < WIDTH) && (y >= 0 && y < HEIGHT)) {
    document.querySelector(`#cell-${y}-${x}`).classList.toggle("on");
  }
}

function toggleCellAndNeighbors(y ,x) {
  toggleCell(y, x);
  toggleCell(y - 1, x);
  toggleCell(y + 1, x);
  toggleCell(y, x - 1);
  toggleCell(y, x + 1);
}

function handleClick() {
  steps++;
  let coordinates = event.target.id.match(/\d+/g);
  toggleCellAndNeighbors(parseInt(coordinates[0]), parseInt(coordinates[1]));

  if (isWon()) {
    setTimeout(hasWon, 0);
  }
}

// run on game win
function hasWon() {
  alert(`You've won! You took ${steps} steps.`);
  steps = 0;
}

// win logic
function isWon() {
  let allCells = document.querySelectorAll(".game td");

  for (let cell of allCells) {
    if (cell.classList.contains("on")) return false;
  }

  return true;
}