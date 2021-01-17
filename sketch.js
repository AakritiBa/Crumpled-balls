var object1, object2, object3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
		
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here.
 paper=new Paper(200,450,40); 

 dustbin1=new dustbin(1200,650);


	ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ground.display();
paper.display();
dustbin1.display();
 

}


