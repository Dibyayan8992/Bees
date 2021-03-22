//Press "c" To Play "Catch"
	//Click To Catch The Bees
//Press "f" To Play "Flowers"
	//Click To Make A Flower That The Bees Will Fly To

var bnum = 25;
var ns = 50;
var bspeed1 = 8;
var bspeed2 = 5;
var fp = 25;

{ //Boring Variables
var bw = 15;
var bees = [];

var stage;
} //Boring Variables (Not Worth Changing)

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < bnum; i++) {
    bees[i] = new bee();
  }
  
  stage = 1;
}

function draw() {
  
  if (stage == 1) {
  	background(0, 100, 255);
    
  	textAlign(CENTER);
    textSize(55);
    noStroke();
    fill(0,25);
    text('Catch!', width/2, 80);
    
    for (var k = 0; k < bnum; k++) {
  		bees[k].move();
  		bees[k].display();
  		bees[k].barrier();
  		bees[k].net();
  	}
  }
  if (stage == 2) {
 		 background(19, 178, 20);
    
     textAlign(CENTER);
     textSize(55);
     noStroke();
     fill(0,25);
     text('Flowers!', width/2, 80);
     	for (var l = 0; l < bnum; l++) {
  		bees[l].flower();
      bees[l].move();
  		bees[l].barrier();
      bees[l].display();
  
  	}
  }
  
  { //Moving Wings
  bw = bw + random(-5,5);
  if (bw > 20 || bw < 0) {
  bw = 15;
  }
  } //Moving Wings

}

function bee() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.xmove = random (-bspeed2,bspeed1);
  this.ymove = random (-bspeed1,bspeed2);
  
  
  this.display = function(){
  //Wings
  ellipseMode(RADIUS);
  noStroke();
  fill(171, 240, 255);
  ellipse(this.x+10, this.y-5,bw,8);
  ellipse(this.x-10, this.y+5,bw,8);
  ellipse(this.x+10, this.y+5,bw,8);
  ellipse(this.x-10, this.y-5,bw,8);

  //Body
  fill(255, 244, 61);
  angleMode(DEGREES);
  ellipse (this.x, this.y, 15, 20);
  stroke(0);
  strokeWeight(5);
  line(this.x-10, this.y-5, this.x+10, this.y-5);
  line(this.x-10, this.y+5, this.x+10, this.y+5);
  }
  
	this.move = function() {
    this.x = this.x + this.xmove;
    this.y = this.y + this.ymove;
    
  this.barrier = function() {
  	if (this.x >= width || this.x <= 0) {
   		this.xmove = -this.xmove;
   	} else if (this.y >= height || this.y <= 0) {
   		this.ymove = -this.ymove;
   	}
  }
  
  this.net = function() {
  
    if (mouseIsPressed){
    	ellipseMode(RADIUS);
    	noFill();
    	stroke(44);
    	strokeWeight(10);
    	ellipse(mouseX, mouseY, ns, ns);
    }
    if (mouseIsPressed && this.x+20 >= mouseX-ns && this.y+20 >= mouseY-ns && mouseIsPressed && this.x-20 <= mouseX+ns && this.y-20 <= mouseY+ns) {
      this.xmove = -this.xmove;
  		this.ymove = -this.ymove;
  	} 
  
  }
  
  this.flower = function() {
  	if (mouseIsPressed){
    	ellipseMode(RADIUS);
    	noStroke();
    	//Petals
    	fill(255,0, 158);
   	  ellipse(mouseX+25, mouseY,20,20);
   		ellipse(mouseX-25, mouseY,20,20);
    	ellipse(mouseX, mouseY-25,20,20);
    	ellipse(mouseX, mouseY+25,20,20);
    	//Center
    	fill(255,245,100);
    	ellipse(mouseX, mouseY,15,15);
    }
    if (mouseIsPressed && this.x+20 >= mouseX-40 && this.y+20 >= mouseY-40 && mouseIsPressed && this.x-20 <= mouseX+40 && this.y-20 <= mouseY+40) {
      this.x = mouseX + random(-fp,fp);
      this.y = mouseY + random(-fp,fp);
  	} 
  	
  }
  
	}
  
}

function keyPressed() {
  if (key == 'c') {
    stage = 1;
  } else if (key == 'f') {
  	stage = 2;
  }
  
}