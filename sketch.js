const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

  DoraImg = loadImage("Images/Doraemon.png");
  backgroundImg = loadImage("Images/Background.jpg")
}

function setup() {
  createCanvas(1050,500);

  engine = Engine.create();
	world = engine.world;

  Doraemon = Bodies.circle(60,200,50,50);
  World.add(world , Doraemon);
  console.log(Doraemon);
  Engine.run(engine);

  slingshot = new Slingshot(this.Doraemon,{x:110,y:150});

  ground = new Ground(600,489,1300,20);

  stand1 = new Ground(400,300,300,20);

  block1 = new Block(327,275,40,50);
  block2 = new Block(335,275,40,50);
  block3 = new Block(355,275,40,50);
  block4 = new Block(398,275,40,50);
  block5 = new Block(428,275,40,50);
  block6 = new Block(458,275,40,50);
  block7 = new Block(488,275,40,50);

  block8 = new Block(335,250,40,50);
  block9 = new Block(368,250,40,50);
  block10 = new Block(398,250,40,50);
  block11 = new Block(430,250,40,50);
  block12 = new Block(460,250,40,50);

  block13 = new Block(367,225,40,50);
  block14 = new Block(397,225,40,50);
  block15 = new Block(430,225,40,50);
  
  block16 = new Block(397,200,40,50);

  stand2 = new Ground(770,200,250,20);

  rblock1 = new Block(710,120,40,50);
  rblock2 = new Block(740,120,40,50);
  rblock3 = new Block(770,120,40,50);
  rblock4 = new Block(800,120,40,50);
  rblock5 = new Block(830,120,40,50);

  rblock6 = new Block(740,100,40,50);
  rblock7 = new Block(770,100,40,50);
  rblock8 = new Block(800,100,40,50);

  rblock9 = new Block(770,50,40,50);

  basket1 = new Basket(800,472,370,15);
  basket2 = new Basket(620,405,15,150);
  basket3 = new Basket(980,405,15,150);

  
  
}

function draw() {
  background(backgroundImg);

  textSize(25);
  fill("white")
  text("Doraemon is feeling hungry..... help Doraemon collect Dora Cakes", 30,30);
  
  slingshot.display();

  imageMode(CENTER);
  image(DoraImg,Doraemon.position.x,Doraemon.position.y,105,105);


  ground.display();

  stand1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  stand2.display();

  rblock1.display();
  rblock2.display();
  rblock3.display();
  rblock4.display();
  rblock5.display();

  rblock6.display();
  rblock7.display();
  rblock8.display();

  rblock9.display();

  basket1.display();
  basket2.display();
  basket3.display();

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.Doraemon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.Doraemon);
  }
}