var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red=createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  btn_green=createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  //create blue button

  bluebutton= createButton("BLUE")
  bluebutton.position(150,150)
  bluebutton.mousePressed(blue_bg)

}
function red_bg()
{
  r=120;
  g=0;
  b=0;
}

function green_bg()
{
  r=0;
  g=255;
  b=0;
}

function blue_bg()
{
  r=0;
  g=0;
  b=255;
}


function draw() {
  background(r,g,b);
}