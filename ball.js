class paper{
    constructor(x,y){
        var opt={
            restitution: 1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }


    
    this.body=Matter.Bodies.rectangle(x,y,40,40,opt);
    

        World.add(world,this.body);
    }
display(){
  var angle=this.body.angle;
  var pos=this.body.position;  
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    fill("red");
    ellipseMode(RADIUS)
ellipse(0,0,28,28);
pop();
}

};