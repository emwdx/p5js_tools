// This is for a square canvas. A helper function moves the origin to the center of the canvas and optionally shows grid lines for a cartesian plane. This means that all transforms afterwards are with respect to this new coordinate system.

// This sketch is located at: https://editor.p5js.org/emwdx/sketches/N8btW4e2m

let CANVAS_SIZE = 400;
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_ROTATIONS = 50;
let NUM_OF_POINTS = 8;

var COLORS = [[216, 164, 127],[239, 131, 84],[238, 75, 106],[223, 59, 87],[15, 113, 115]]


function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
  
  
}

function drawGridLines(){
  
  fill(0,0,255)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
    
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
      
  }
}

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220);
  angleMode(DEGREES);
  setupStandardAxes();
  //drawGridLines()
  
  noStroke()
    for(var j = 0;j<NUM_OF_POINTS;j++){
      let randomX = random(0,GRID_SQUARES/3)
      let randomY = random(-GRID_SQUARES/4,GRID_SQUARES/2)
      let randomColor = random(COLORS)
      fill(randomColor);
      let circleSize = random(5,12)
      let num_of_rotations = random(5,30)
      for(var i = 0;i<num_of_rotations;i++){
        
      circle(randomX*STEP,randomY*STEP,circleSize)
        rotate(360/num_of_rotations);
      }
      
  }
  
  
}

function draw() {
  
  
}
