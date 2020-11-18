
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800,300);


	engine = Engine.create();
	world = engine.world;


ground = new Ground();
paper = new Paper ();
dustbin1 = new Dustbin(700,275,100,10)
dustbin2 = new Dustbin(645,245,10,60)
dustbin3 = new Dustbin(755,245,10,60)

	Engine.run(engine);
  
}


function draw() {
  background(0);

	ground.display();
	paper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 Keypressed();
}

function Keypressed(){

if(keyDown(UP_ARROW)){
Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-10})
}

}
