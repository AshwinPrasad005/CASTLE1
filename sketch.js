var ground,world,engine,box1,box2,box3,box4,box5,box6,box7,box8,cone1,cone2,cone3,tri1,tri2;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.World;

function setup() {
  var canvas = createCanvas(600,600);

  ground = createSprite(200,375,400,50);

  engine = Engine.create();
  world = engine.world;

  cone1 = new Circle(300,150,25);
  cone2 = new Circle(200,250,25);
  cone3 = new Circle(400,250,25);
  box1 = new Rectangle(151,85,50, PI/2);
  box2 = new Rectangle(115,124,50, PI/2);
  box3 = new Rectangle(190,122,50, PI/2);
  box4 = new Rectangle(151,110,50, PI/2);
  box5 = new Rectangle(140,124,50, PI/2);
  box6 = new Rectangle(165,123,50, PI/2);
  box7 = new Rectangle(115,148,50, PI/2);
  box8 = new Rectangle(190,147,50, PI/2);
  tri1 = new Rectangle(115,50,50, -PI/7);
  tri2 = new Rectangle(190,50,50, -PI/7);
}

function draw() {
  background("orange");
  Engine.update(engine);

  cone1.display();
  cone2.display();
  cone3.display();
  
  tri1.display();
  tri2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

}