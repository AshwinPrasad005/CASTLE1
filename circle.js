class Circle{

    constructor(x,y,radius){
        var option = {
            isStatic : true
        }

        this.body = Bodies.circle(x,y,radius,option);
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        
        ellipseMode(CENTER);
        fill("red")
        ellipse(pos.x,pos.y,this.radius);
        pop();

    }
    
    

}