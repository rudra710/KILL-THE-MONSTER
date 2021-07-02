const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
 
  backgroundImg = loadImage("background1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1900, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);

  box5a = new Box(700, 100, 70, 70);
  box6a = new Box(800, 100, 70, 70);
  box7a = new Box(800, 100, 70, 70);
  box8a = new Box(800, 100, 70, 70);

  box5s = new Box(700, 100, 70, 70);
  box6s = new Box(800, 100, 70, 70);
  box7s = new Box(800, 100, 70, 70);
  box8s = new Box(800, 100, 70, 70);



}

function draw() {
     background(backgroundImg);

 
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box5.display();
  box6.display();
  box7.display();
  box8.display()

  box5a.display();
  box6a.display();
  box7a.display();
  box8a.display()

  box5s.display();
  box6s.display();
  box7s.display();
  box8s.display()


  hero.display();
  rope.display();
  monster.display();

  fill("red")
  textSize(23)
  text("DRAG THE SUPER HERO TO BLOCKS AND KILL THE MONSTER",100,50);
  text("HI FRIENDS PLAY THE GAME AND ENJOY IT",200,130)
  


  

}

function keyPressed(){
  if(keyCode === 32){
   rope.attach(hero.body);
   Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
}

function mouseRealeased(){
  rope.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x: mouseX, y:mouseY})
}

