class umbrella {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("Images/walking_1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     imageMode(CENTER);
      
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
