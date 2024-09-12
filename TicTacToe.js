let board = [
 ['','',''],
 ['','',''],
 ['','','']
]

var players = ['X','O'];

var currentPlayer;
var available = [];
var Size = 400;
var nCol = 3;
var nRow = 3;
var totalClicks = 0;


function setup(){   //Setup runs only once!
	createCanvas(Size,Size);
	currentPlayer = random(players);
	
	var w = width/nCol;    //width of cell
	var h = height/nRow;	//height of cell
	
	strokeWeight(4);
	background(220);

	
	//Making the grid
	line(w,0,w,height);
	line(w*2,0,w*2, height);
	line(0,h,width,h);
	line(0,h*2,width,h*2);
	
	line(2,2,2,height);
	line(2,2,width,2);
	line(2,height-2,width,height-2);
	line(width-2,2,width,height-2);
	//Grid ends
	
	
	for(let j = 0; j<3; j++){
		for(let i=0; i<3; i++){
			available.push([i,j]);
		}
	}
	//All sites are available in the beginning
}

function mouseClicked(){
	var w = width/nCol;    //width of cell
	var h = height/nRow;	//height of cell
	
	/*Do
	while totalClicks < 9{
	1. Find coordinates of pressed cell.            DONE
	2. Check whether cell is inside 'available'.
	3. If yes, assign board[cellX, cellY] = currentplayer
	4. Remove cell from 'available'
	5. Switch current player.
	Later:
	6. Check for a winner
	}
	*/
			
		xIndex = Math.floor(mouseX / w);
		yIndex = Math.floor(mouseY / h);
		
		// Just to check if the coordinates are being returned correctly
		if (xIndex >= 0 && xIndex < nCol && yIndex >= 0 && yIndex < nRow) {
			console.log(`Clicked in cell (${xIndex}, ${yIndex})`);
		} else {
			console.log("Clicked outside the grid");
		}
}

function draw(){
	var w = width/nCol;    //width of cell
	var h = height/nRow;	//height of cell
	
	for(let j = 0; j<3; j++){
		for(let i=0; i<3; i++){
			let x = w*i + w/2;
			let y = h*j + h/2;
			
			let spot = board[i][j];
			strokeWeight(4);
			if(spot == players[1]){
				noFill();
				ellipse(x,y,0.75*w);
			}
			else if (spot == players[0]){
				let xr = w/4;
				line(x-xr,y-xr,x+xr,y+xr);
				line(x+xr,y-xr,x-xr,y+xr);
			}
	}
	
	}
}
