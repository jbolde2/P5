let bubble;
let z;
let zz;
let zzz;

function setup() {
  createCanvas(600, 600);
  bubble = new Bubble();
  bubble1 = new Bubble(100, 400, 30);
  bubble2 = new Bubble(400, 100, 20);
}

class Bubble {
  
  constructor(x, y, r,j,s) {

    // passing arguements into function
    this.x = 200;
    this.y = 150;
    this.j = 115;
    this.s = 55;
    
    //what it is to be a bubble is to have an x and and an r 
  }
  
  move() {
    this.x = this.x + random(-3, 2);
    this.y = this.y + random(-3, 2);
  }

  show() {
    let z = random(200, 255);
    let zz = random(13, 255);
    let zzz = random(33, 255);
    let zzzz = random(1, 100);

    stroke(225);
    strokeWeight(5);
    fill(zzz, zz, z, zzzz);
    rect(this.x, this.y, this.j, this.s);
  }
}

function draw() {
  background(220);
  // bubble1.move();
  bubble1.show();
  bubble2.show();
  // bubble2.move();
}

