/*
  Seed - A game of growth
  Nathaniel Potrepka
  January 2016
*/ 

var zoom = 1;
var zoomTarget = 0;
var time = 0;
var upLeft = false;
var upBranch = false;
var upRight = false;
var downLeft = false;
var downBranch = false;
var downRight = false;

var seed;
var y;
var ySpeed;

function setup() {
  createCanvas(960, 720);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  translate(width/2, height/2);
  scale(zoom);

  // Sky
  background(1);

  // Ground
  fill(22, 75, 12);
  noStroke();
  rect(-480, 0, 960, 360);

  if (seed) {
    // Zoom adjustment
    zoom = zoom * 0.99 + zoomTarget * 0.01;

    if (y < 0) {
      // Gravity pulls seed
      ySpeed += 0.03;
    } else {
      // Seed splits initially
      seed.branch2(HALF_PI);
      
      // Seed continuously grows
      seed.grow(0, y);
      seed.update();

      // Dirt stops seed
      ySpeed *= 0.5;
    }
    y += ySpeed;

    // Draw seed
    noFill();
    stroke(120, 75, 60);
    strokeWeight(seed.size);
    strokeCap(PROJECT);
    seed.draw(0, y);

    console.log(seed.count());
  }
}

function keyPressed() {
  if (seed) {
    if (key == 'q' || key == 'Q')
      upLeft = true;
    else if (key == 'w' || key == 'W')
      upBranch = true;
    else if (key == 'e' || key == 'E')
      upRight = true;
    else if (key == 'a' || key == 'A')
      downLeft = true;
    else if (key == 's' || key == 'S')
      downBranch = true;
    else if (key == 'd' || key == 'D')
      downRight = true;
  } else if (keyCode == ENTER || keyCode == RETURN) {
    // Seed is created
    seed = new Tree();
    seed.size = 9;
    zoomTarget = 2;
    y = -height/2 - seed.size;
    ySpeed = 0;
  }
}

function keyReleased() {
  if (seed) {
    if (key == 'q' || key == 'Q')
      upLeft = false;
    else if (key == 'w' || key == 'W')
      upBranch = false;
    else if (key == 'e' || key == 'E')
      upRight = false;
    else if (key == 'a' || key == 'A')
      downLeft = false;
    else if (key == 's' || key == 'S')
      downBranch = false;
    else if (key == 'd' || key == 'D')
      downRight = false;
  }
}

function Tree() {
  this.parent;
  this.left;
  this.right;
  this.offsetX = 0;
  this.offsetY = 0;
  this.direction = 0;
  this.length = 0;
  this.size = 1;

  this.count = function() {
    var c = 1;
    if (this.left)
      c += this.left.count();
    if (this.right)
      c += this.right.count();
    return c;
  }

  this.grow = function(x, y) {
    if (this.left || this.right) {
      if (this.left)
        this.left.grow(x + this.offsetX, y + this.offsetY);
      if (this.right)
        this.right.grow(x + this.offsetX, y + this.offsetY);
    } else {
      if (this.length < 16) {
        // Grow longer
        this.length += 0.25;
        // Movement
        if (y < 0) {
          if (upLeft)
            this.direction -= 0.01;
          if (upRight)
            this.direction += 0.01;
          if (upBranch && this.parent && this.parent.parent) {
            if (this == this.parent.left && this.parent.right)
              this.direction -= 0.01;
            else if (this == this.parent.right && this.parent.left)
              this.direction += 0.01;
          }
        } else {
          if (downLeft)
            this.direction += 0.01;
          if (downRight)
            this.direction -= 0.01;
          if (downBranch && this.parent && this.parent.parent) {
            if (this == this.parent.left && this.parent.right)
              this.direction += 0.01;
            else if (this == this.parent.right && this.parent.left)
              this.direction -= 0.01;
          }
        }
      } else if (this.size > 1) {
        // Branch when long enough
        if ((y < 0 && upBranch) || (y >= 0 && downBranch))
          this.branch2(0);
        else
          this.branch();
      }
    }
  };

  this.branch = function() {
    if (!this.left) {
      this.left = new Tree();
      this.left.direction = this.direction;
      this.left.size = this.size - 1;
      this.left.parent = this;
    }
  }

  this.branch2 = function(angle) {
    if (!this.left && !this.right) {
      this.left = new Tree();
      this.left.direction = this.direction - angle;
      this.left.size = this.size - 1;
      this.left.parent = this;

      this.right = new Tree();
      this.right.direction = this.direction + angle;
      this.right.size = this.size - 1;
      this.right.parent = this;
    }
  }

  this.update = function() {
    this.offsetX = cos(this.direction) * this.length;
    this.offsetY = sin(this.direction) * this.length;

    if (this.left)
      this.left.update();
    if (this.right)
      this.right.update();
  }

  this.draw = function(x, y) {
    var xTo = x + this.offsetX;
    var yTo = y + this.offsetY;

    strokeWeight(this.size);
    line(x, y, xTo, yTo);
    
    if (this.left)
      this.left.draw(xTo, yTo);
    if (this.right)
      this.right.draw(xTo, yTo);
  }
}
