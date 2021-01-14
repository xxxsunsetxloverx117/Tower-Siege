const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    pImg = loadImage("polygon.png")

}

function setup(){
    createCanvas(800,600);
  myengine = Engine.create();
  world = myengine.world;

  floor1= new Floor(650,350,250,20)
//just boxes
  box1 = new Box(651,320)
  box2 = new Box(658,320)
  box3 = new Box(665,320)
  box4 = new Box(672,320)
  box5 = new Box(679,320)
//more boxes
  box6 = new Box(658,300)
  box7 = new Box(665,300)
  box8 = new Box(672,300)
  box9 = new Box(679,300)
  
  box10 = new Box(660,280)
  box11 = new Box(670,280)
  box12 = new Box(650,280)

  polygon = Bodies.circle(150,300,20)
  World.add(world,polygon)

  sling = new SlingShot(polygon, {x:150,y:150})
  
}

function draw(){
    Engine.update(myengine)
    background("black")
   
    floor1.display()
    box1.display()
    box2.display()
    box3.display() 
    box4.display()
    box5.display()

    box6.display()
    box7.display()
    box8.display()
    box9.display()

    box10.display()
    box11.display()
    box12.display()

    imageMode(CENTER)
    image(pImg,polygon.position.x,polygon.position.y,40,40)


    sling.display()
    
}

function mouseDragged(){


    Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY})
    
}

function mouseReleased(){
    sling.fly()
    
}