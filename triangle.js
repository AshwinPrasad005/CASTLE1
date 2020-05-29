class Triangle{

    constructor(x,y,sides,radius){
        var option = {
            isStatic : true
        }

        this.body = Bodies.polygon(x,y,sides,radius,option);
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        
        polygonMode(CENTER);
        fill("red")
        polygon(pos.x,pos.y,this.sides,this.radius);
        pop();

    }
    
    

}