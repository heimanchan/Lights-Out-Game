const WIDTH = 7;
const HEIGHT = 5;
document.querySelector(".game").addEventListener("click", handleClick);

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
  let coordinates = event.target.id.match(/\d+/g);
  toggleCellAndNeighbors(parseInt(coordinates[0]), parseInt(coordinates[1]));

  if (isWon()) {
    setTimeout(hasWon, 0);
  }
}

// run on game win
function hasWon() {
  alert("You've won!");
}

// win logic
function isWon() {
  let allCells = document.querySelectorAll(".game td");

  for (let cell of allCells) {
    if (cell.classList.contains("on")) return false;
  }

  return true;
}