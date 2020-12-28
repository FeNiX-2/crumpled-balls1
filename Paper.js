class Paper{
    constructor(x,y,radius){
        var option= {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':false
        }
       this.radius=radius;
       this.body=Bodies.circle(x,y,radius,options);
       World.add(world,this.body); 
    }
    display(){
        fill("red")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.position.y,this.radius,this.radius);
    }
}