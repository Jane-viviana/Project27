
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,200,25,25);
	bob2 = new Bob(250,200,25,25);
	bob3 = new Bob(300,200,25,25);
	bob4 = new Bob(350,200,25,25);
	bob5 = new Bob(400,200,25,25);

  roof = new Roof(width/2,100,800,15);
  
  rope1 = new Rope(bob1.body,roof.body,50,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



