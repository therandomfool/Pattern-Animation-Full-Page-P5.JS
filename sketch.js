var s = 60;
var segments = [al,bl,cl,dl,el,fl,gl,hl,il,jl];
var seg;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,80,70);
}

function draw() {
  background(random(0,255),random(0,255),random(0,255));
  translate(width / 5, height / 2);
  rotate(random(0,TWO_PI));
  frameRate(0.69);
  
  stroke(random(0,255),random(0,255),random(0,255));
  s = random(16, 32);
  strokeWeight(s / 8);
  
for (let j = -(windowWidth+windowHeight)/2; j < (windowWidth+windowHeight)/2; j+=s) {
    for (let i = -(windowWidth+windowHeight)/2; i < (windowWidth+windowHeight)/2; i += s) {
      seg = Math.floor(random(segments.length));
      segments[seg](i * 3, j, s);
      seg = Math.floor(random(segments.length));
      segments[seg]((i * 3) - s, j, s);
      seg = Math.floor(random(segments.length));
      segments[seg]((i * 3) + s, j, s);
    }
  }
}

function al(x, y, w) {
  for (let i = 0; i < w; i += s) {
    line(x + i, y + s / 4, x + i, y + s / 2);
    line(x + s / 2 + i, y + s / 2, x + i, y + s / 2);
    line(x + i + s / 2, y + s / 2, x + i + s / 2, y);
    line(x + s / 2 + i, y, x + s + i, y);
    line(x + i + s, y, x + i + s, y + s / 4);
  }
}

function bl(x, y, w) {
  for (let i = 0; i < w; i += s) {
    line(x + i, y + s / 4, x + i, y + s / 2);
    line(x + s / 4 + i, y + s / 2, x + i, y + s / 2);
    line(x + i + s / 4, y + s / 2, x + i + s / 1.5, y);
    line(x + s / 1.5 + i, y, x + s + i, y);
    line(x + i + s, y, x + i + s, y + s / 4);
  }
}

function cl(x, y, w) {
  for (let i = 0; i < w; i += s) {
    line(x + i, y + s / 4, x + i, y + s / 2);
    line(x + i, y + s / 2, x + i + s, y);
    line(x + i + s, y, x + i + s, y + s / 4);
  }
}

function dl(x, y, w) {
  for (let i = 0; i < w; i += s) {
    noFill();
    arc(x + i + s / 4, y + s / 4, s / 2, s / 2,  HALF_PI, PI);
    line(x + i + s / 4, y + s / 2, x + i + s / 1.33, y);
    arc(x + i + (3 * s / 4), y + s / 4, s / 2, s / 2, PI + HALF_PI, 0);
  }
}

function el(x, y, w) {
  for (let i = 0; i < w; i += s) {
    noFill();
    arc(x + i + s / 4, y + s / 4, s / 2, s / 2, 0, PI);
    arc(x + i + (3 * s / 4), y + s / 4, s / 2, s / 2, PI, 0);
  }
}

function fl(x, y, w) {
  for (let i = 0; i < w; i += s) {
    noFill();
    arc(x + i + s / 4, y + s / 4, s / 2, s / 2,  HALF_PI, PI);
    arc(x + i + s / 4, y, s , s, 0, HALF_PI);
    arc(x + i + (3 * s / 4), y + s/2, s , s, PI, PI + HALF_PI);
    arc(x + i + (3 * s / 4), y + s / 4, s / 2, s / 2, PI + HALF_PI, 0);
  }
}

function gl(x, y, w) {
  noFill();
  strokeJoin(ROUND);
  for (let i = 0; i < w; i += s) {
    quad(x + i, y + s / 2, 
         x + i, y + s / 4, 
         x + i + s, y, 
         x + i + s, y + s / 4);
  }
}

function hl(x, y, w) {
  noFill();
  strokeJoin(ROUND);
  for (let i = 0; i < w; i += s) {
    quad(x + i, y + s / 4, 
         x + i, y + s / 2, 
         x + i + s, y, 
         x + i + s, y + s / 4);
  }
}

function il(x, y, w) {
  noFill();
  strokeJoin(ROUND);
  for (let i = 0; i < w; i += s) {
    rect(x + i, y + s / 4, s/4,s/4);
    rect(x + i + s/4, y, s/4,s/4);
    rect(x + i + s/2, y + s / 4, s/4,s/4);
    rect(x + i + (3 * s / 4), y, s/4,s/4);
  }
}

function jl(x, y, w) {
  for (let i = 0; i < w; i += s) {
    noFill();
    arc(x + i + s / 4, y + s / 4, s / 2, s / 2, 0, TWO_PI);
    arc(x + i + (3 * s / 4), y + s / 4, s / 2, s / 2, TWO_PI, 0);
  }
}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(0,80,70);
}

// if enter is pressed, download a jpg file
function keyPressed() {
  if (keyCode == 13) {
	saveCanvas('pattern', 'jpg');
  } else {
  }
}