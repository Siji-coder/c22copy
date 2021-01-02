const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,ball;
var myEngine,myworld;
//var box1,box2;
function setup() {
  createCanvas(600,600);
  myEngine=Engine.create();
  myworld=myEngine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(300,570,600,30,options);
  World.add(myworld,ground);
  console.log(ground);
}
function draw() {
  background("black");
  Engine.update(myEngine);  
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,30);
  //rect(groun)
  //drawSprites();
}