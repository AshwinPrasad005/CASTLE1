var ground,world,engine,box1,box2,box3,box4,box5,box6,box7,box8,cone1,cone2,cone3,tri1,tri2;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.World;

function setup() {
  var canvas = createCanvas(600,600);

  //ground = createSprite(200,375,400,50);

  engine = Engine.create();
  world = engine.world;

  cone1 = new Circle(300,150,25);
  cone2 = new Circle(200,250,25);
  cone3 = new Circle(400,250,25);
  box1 = new Rectangle(150,85,100,50);
  box2 = new Rectangle(110,125,50,50);
  box3 = new Rectangle(190,125,50, 50);
  box4 = new Rectangle(150,110,50, 50);
  box5 = new Rectangle(135,125,60,50);
  box6 = new Rectangle(165,125,60,50);
  box7 = new Rectangle(110,150,50, 50);
  box8 = new Rectangle(190,150,50, 50);
  ground = new Rectangle(250,250,400,PI/8)
  tri1 = new Triangle(165,65,50,50,-PI/7);
  tri2 = new Triangle(240,25,50,50,-PI/8);
}

function draw() {
  background("orange");
  Engine.update(engine);

  tri1.display();
  tri2.display();
  cone1.display();
  cone2.display();
  cone3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  //ground.display();

}