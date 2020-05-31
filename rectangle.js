class Rectangle{

    constructor(x,y,width,angle){
        var option = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,angle,option);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,50,angle);
        pop();

    }
    
    

}