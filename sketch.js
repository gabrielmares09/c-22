const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var ground
var button
var ground2
var ground3
var angle = 0
var box
var box2
var box3
var box4




function setup() {
  createCanvas(400, 400);
  //crie o mecanismo
  engine = Engine.create();
  world = engine.world;


  var ball_options = {
    restitution: 0.85,
    frictionAir: 0.02
  }

  var ground_options = {
    isStatic: true
  };

  button = createImg("up.png");
  button.position(300,40);
  button.size(40, 40)
  button.mouseClicked(vForce)
  //crie o solo
  //adicione ao mundo
  //chamando a classe Box
  box=new Box(40,300,30,50)
  
  box2=new Box(120,300,30,50)
 
  box3=new Box(200,300,30,50)
 
  box4=new Box(260,300,30,50)
 
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options)
 
  World.add(world, ground)
 
  ball = Bodies.circle(100, 10, 20, ball_options);

  ground2 = Bodies.rectangle(380, 200, 20, 400, ground_options)
 
  ground3 = Bodies.rectangle(200, 200, 50, 20, ground_options)
  
  World.add(world, ground2)
 
  World.add(world, ball);




  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  fill("red")
  ellipse(ball.position.x, ball.position.y, 20);
  //escreva uma função de retângulo para exibir o solo.
  fill("green")
  rect(ground.position.x, ground.position.y, 400, 20)

  rect(ground2.position.x, ground2.position.y, 20, 400)
  
  push()
  
  translate(ground3.position.x, ground3.position.y)
  rotate(angle)
  angle = angle+1
 
  rect(0, 0, 50, 20)
  pop()
fill("white")
  box.show()
  
  box2.show()

  box3.show()

  box4.show()


}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.05})
}
