const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
  // polygon_img=loadimage("polygon.png");
  // backgroundImg=loadImage("bg.png");

}


function setup() {
engine=Engine.create();
world=engine.world;

  createCanvas(900,400);
  ground=new Ground();
  stand1=new Stand(380,300,270,10);
  stand2=new Stand(700,00,200,10);

  //level one
  block1=new Block(280,275,30,40);
  block2=new Block(310,275,30,40);
  block3=new Block(340,275,30,40);
  block4=new Block(370,275,30,40);
  block5=new Block(400,275,30,40);
  block6=new Block(430,275,30,40);
  block7=new Block(460,275,30,40);
  block8=new Block(490,275,30,40);

  //level two
  block9=new Block(310,235,30,40);
  block10=new Block(340,235,30,40);
  block11=new Block(370,235,30,40);
  block12=new Block(400,235,30,40);
  block13=new Block(400,235,30,40);
  block14=new Block(460,235,30,40);

  // level three
  block15=new Block(340,195,30,40);
  block16=new Block(370,195,30,40);
  block17=new Block(400,195,30,40);
  block18=new Block(430,195,30,40);

// level four
  block19=new Block(370,155,30,40);
  block20=new Block(400,155,30,40);

  // level five
  block21=new Block(385,115,30,40);


// set two
// level one
blocks1= new block(640,175,30,40);
blocks2= new block(670,175,30,40);
blocks3= new block(700,175,30,40);
blocks4= new block(730,175,30,40);
blocks5= new block(760,175,30,40);

// level two
  blocks6=new Block(670,275,30,40);
  blocks7=new Block(700,275,30,40);
  blocks8=new Block(730,275,30,40);

  // level three
   blocks9=new Block(700,95,30,40);

   // Ball with slings
   ball =Bodies.circle(50,200,20);
   World.add(world,ball);

   slingShot=nw Slingshot(thsi.ball,{x:200,y:200});
}

  

function draw() {
  // background(backgroundImg);
  background("white"); 
  Engine.updated(engine);


// ground.display();
strokeWeight(2);
stroke(15);


stand1.display();
stand2.display();


stroke(15);
fill("black")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();


stroke(15)
fill("orange")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

stroke(15)
fll("violet")
block15.display();
block16.display();
block17.display();
block18.display();

stroke(15)
fll("green")
block19.display();
block20.display();

stroke(15)
fll("blue")
block17.display();

stroke(15);
fill("red")
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();


stroke(15);
fill("yellow")
block6.display();
block7.display();
block8.display();

stroke(15);
fill("pink")
blocks9.display();
text("drag the line and release to hit the crazy boxes",600,250)
//imageMode(CENTER)
//ball= loadImage(polygon_img,ball.position.x-50,ball.position.y-80,40,40);
//ellipseMode(RADIUS);

ellipse(ball.position.x,ball.position.y,20);
slingshot.display();
}

function mouseDragged({
  Matter.Body.setPosition(thsi.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
  