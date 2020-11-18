class Paper{
     constructor(){
       var options ={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
       }
       this.body = Bodies.circle(20,270,10,options);
       World.add(world,this.body);
     }
display(){
  var pos = this.body.position;

  push();
  translate(pos.x,pos.y);
  ellipseMode(RADIUS);
  fill(255,0,255);
  ellipse(0,0,10,10);
  pop();
}
}