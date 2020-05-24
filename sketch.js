var ground,world,engine,box1,box2,box3,box4,box5,box6;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.World;

function setup() {
  var canvas = createCanvas(600,600);

  ground = createSprite(200,375,400,50);

  engine = Engine.create();
  world = engine.world;

  box1 = new Rectangle(200,300,50,100);
  box2 = new Rectangle(400,300,50,100);
  box3 = new Rectangle(300,300,75,100);
  box4 = new Rectangle(300,250,200,10);
  box5 = new Rectangle(300,200,75,100);
  box6 = new Rectangle(300,175,100,30);
}

function draw() {
  background("orange");
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

}