const WIDTH = 7;
const HEIGHT = 5;

function toggleCell(x ,y) {
  if ((x >= 0 && x < WIDTH) && (y >= 0 && y < HEIGHT)) {
    document.querySelector(`#cell-${x}-${y}`).classList.toggle("on");
  }
}

function toggleCellAndNeighbors(x ,y) {
  toggleCell(x, y);
  toggleCell(x - 1, y);
  toggleCell(x + 1, y);
  toggleCell(x, y - 1);
  toggleCell(x, y + 1);
}