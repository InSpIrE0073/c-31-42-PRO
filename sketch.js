const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops=100;
var engine, world;
var drops = [];
var t1,t2,t3,t4;
var thunder,thunderCreatedFrame;
function preload(){
    t1=loadImage("Images/1.png");
     t2=loadImage("Images/2.png");
      t3=loadImage("Images/3.png"); 
      t4=loadImage("Images/4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    boy = new umbrella(200,517,200,200)
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400),5,5))
    
}
}
function draw(){
    background ("black")
    Engine.update(engine)
    boy.display();

    for(var i=0; i<drops.length; i++){
       drops[i].display()
       drops[i].update()
}   
if(frameCount%100 === 0)
{ thunder = createSprite(random(20,380),5,5,5); 
    thunderCreatedFrame=frameCount; 
    var r=Math.round(random(1,4)); 
    switch(r){ case 1: thunder.addImage(t1); 
        break; case 2 : thunder.addImage(t2); break; 
        case 3: thunder.addImage(t3); break; 
        case 4: thunder.addImage(t4); } thunder.scale=0.6; } 
        if (thunderCreatedFrame+20===frameCount){ thunder.destroy(); }
drawSprites();
}
