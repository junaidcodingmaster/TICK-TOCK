var hr = hour();
var min = minute();
var sec = second();

function setup() {
createCanvas(200,70);
  angleMode(DEGREES);

}

function draw() {
  background("black");

  var hr = hour();
  var min = minute();
  var sec = second();

  
  

  fill("white");
  textSize(30);
  text(hr +" : "+min,50,50);
  textSize(25);
  text(timeSetter,150,50);
}