const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    log1 = new Log(500,300,20,150, PI/2);

    log3 =  new Log(750,200,20,150, PI/2);

    box1 = new Box(480,275,20,50);
    box2 = new Box(490,275,20,50);
    box3 = new Box(500,275,20,50);
    box4 = new Box(482,225,20,50);
    box5 = new Box(497,225,20,50);
    box6 = new Box(490,150,20,50);

    box7 = new Box(480+500/2,275-100,20,50);
    box8 = new Box(490+500/2,275-100,20,50);
    box9 = new Box(500+500/2,275-100,20,50);
    box10 = new Box(482+500/2,225-100,20,50);
    box11 = new Box(497+500/2,225-100,20,50);
    box12 = new Box(490+500/2,150-100,20,50);

 

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    background("lightgrey");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    log1.display();

    log3.display();

    bird.display();
    slingshot.display();   
    console.log(bird.body.position.y); 

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}