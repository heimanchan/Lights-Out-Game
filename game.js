function toggleCell(x ,y) {
  document.querySelector(`#cell-${x}-${y}`).classList.toggle("on");
}

function toggleCellAndNeighbors(x ,y) {
  toggleCell(x, y);
  toggleCell(x - 1, y);
  toggleCell(x + 1, y);
  toggleCell(x, y - 1);
  toggleCell(x, y + 1);
}