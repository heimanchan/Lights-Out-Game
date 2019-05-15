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
  
  let x, y;
  let coordinates = event.target.id.match(/\d+/g);
  toggleCellAndNeighbors(parseInt(coordinates[0]), parseInt(coordinates[1]));
}

function isWon() {
  let allCells = document.querySelectorAll(".game td");

  for (let cell of allCells) {
    if (document.querySelector(cell).classList.contains("on")) {
      return false;
    }
  }

  return true;
}