class  Block{
    constructor(x,y,width,height){
       var options={
          isStatic: false,
          restitution: 0.4,
          
          friction: 0.1
       }
       this.body = Bodies.rectangle(x,y,width-10,height-15,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Images/DoraCakes.png");
       this.visibility = 255;

       World.add(world, this.body);
    }
    display(){

    var pos =this.body.position;
    var angle = this.body.angle;
       
    if(this.body.speed < 9){
     
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     fill(0,255,0)
    image(this.image,0,0,this.width,this.height);
    // rect(0,0,this.width,this.height);
     pop();
   }
   else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 15;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      //rect(this.body.position.x, this.body.position.y,this.width,this.height)
      pop();
    }
  }
}