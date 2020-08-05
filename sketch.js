const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;

var stone;
var slings;

var base;

function setup() {
  createCanvas(1200,800);
  
 engine = Engine.create();
 world=engine.world;

  stone= new Paper (310,200,40)


  slings = new  SLINGSHOT(stone.body,{x:300,y:210})

  

  b1 = new Dus (530,235,30,40);
  b2 = new Dus (560,235,30,40);
  b3 = new Dus (590,235,30,40);
  b4 = new Dus (620,235,30,40);
  b5 = new Dus (650,235,30,40);


  b6 = new Dus (560,195,30,40);
  b7 = new Dus (590,195,30,40);
  b8 = new Dus (620,195,30,40);
  
  b9 = new Dus (590,155,30,40);

  base= new Dus1(500,300,320,5)
   World.add(world,base);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  strokeWeight(4);
  stone.display();
  
  slings.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  base.display();
  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
  slings.fly();
}