const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(580,380,50,50);
    box2 = new Box(720,380,50,50);
    pig1 = new Pig(650,380);
    log1 = new Log(650,330,200,PI/2);
    box3 = new Box(580,300,50,50);
    box4 = new Box(720,300,50,50);
    pig2 = new Pig(650,300);
    ground = new Ground(600,height,1200,20)
    log2 = new Log(650,250,200,PI/2);  
    box5 = new Box(650,220,50,50);
    log3 = new Log(590,185,111,PI/7);
    log4 = new Log(705,185,111,-PI/7);
    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}