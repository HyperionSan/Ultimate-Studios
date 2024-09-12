let rows = 9;
let cols = 9;
let cellSize;
let grid = [];


function drawGrid() {
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      rect(x, y, cellSize, cellSize);
      grid[i][j] = { x: x, y: y }; // Store the position of each cell
    }
  }
}

function setup() {
  createCanvas(400, 400);
  cellSize = width / cols; // Assuming a square canvas
  noLoop(); // Stops draw from looping, so the grid is drawn only once
  drawGrid();
  strokeWeight(3)
  // central dividers
  line(3*cellSize,0,3*cellSize,height);
  line(6*cellSize,0,6*cellSize,height);
  line(0,3*cellSize,width,3*cellSize);
  line(0,6*cellSize,width,6*cellSize);
  
  // boundary
  line(2,2,2,width);
  line(2,2,width-2, 2);
  line(width-2,2,width-2, height-2);
  line(2,height-2, width-2,height-2);
}


function mousePressed() {
  let xIndex = Math.floor(mouseX / cellSize);
  let yIndex = Math.floor(mouseY / cellSize);

  if (xIndex >= 0 && xIndex < cols && yIndex >= 0 && yIndex < rows) {
    console.log(`Clicked in cell (${xIndex}, ${yIndex})`);
  } else {
    console.log("Clicked outside the grid");
  }
}
