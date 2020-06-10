var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,sling1,Bob1,Bob2,Bob3,Bob4,Bob5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground (400,75,600,40)

	Bob1 = new Bob(200,425,70)

	Bob2 = new Bob(320,425,70)

	Bob3 = new Bob(450,425,70)

	Bob4 = new Bob(580,425,70)

	Bob5 = new Bob(200,425,70)

	sling1 = new Slingshot (Bob1.body,{x:180,y:75})

	sling2 = new Slingshot (Bob2.body,{x:320,y:75})
	sling3 = new Slingshot (Bob3.body,{x:460,y:75})
	sling4 = new Slingshot (Bob4.body,{x:600,y:75})


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground1.display()

Bob1.display()

Bob2.display()

Bob3.display()

Bob4.display()

Bob5.display()


sling1.display()

sling2.display()
	
sling3.display()

sling4.display()




  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){
	
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-1000,y:-1000});
	}
	
	
	
	  }



