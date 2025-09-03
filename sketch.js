function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(0);

    fill(255);
    ellipse(0, 10, 700, 700);
    
    //rolling hills
    fill(0);
    ellipse(40, 35, 500, 500);
    ellipse(0,350,30,30);
    ellipse(90,335,30,30);
    ellipse(170,300,30,30);
    ellipse(235,250,30,30);
    ellipse(285,190,30,30);
    ellipse(320,110,30,30);
    ellipse(335,30,30,30);

    //top left pattern
    fill(255);
    ellipse(40,40,320,300);
    fill(0);
    ellipse(30,30,200,200);

    fill(255);
    noStroke();
    ellipse(30,40,200,10);
    ellipse(30,40,10,50);

    //bottom right pattern
    fill(255);
    ellipse(550,550,700,700);
    fill(0);
    ellipse(270,365,10,100);
    ellipse(390,385,10,300);
    ellipse(310,385,10,200);
    ellipse(350,385,10,300);
    ellipse(320,385,200,10);
    ellipse(320,325,200,10);
    ellipse(370,270,100,10);
}