class Drop {
    constructor(x,y,width,height) {
      var options = {
          restitution:0,
    //density:0.001,
    friction:0.1,
    //isStatic:false,
      }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
     translate(pos.x,pos.y);
    // rotate(this.body.angle);
        fill("blue");
        ellipse(0,0,this.width,this.height);
     pop()
    }
  update(){
if(this.body.position.y>this.height){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
}
  }
  };
