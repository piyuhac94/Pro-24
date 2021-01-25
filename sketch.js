var stone1;
var ground1;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700); 


	engine = Engine.create();
	world = engine.world;

  stone1 = new Stone (800,320,50,50)
  ground1 = new Ground(800,700)
    

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  stone1.display()
  
  drawSprites();
 
}



