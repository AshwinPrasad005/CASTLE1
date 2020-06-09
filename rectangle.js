class Rectangle{

    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        //Matter.Body.setAngle(this.body,angle);
        this.height = height;
        this.width = width;
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;
        //var angle = this.body.angle;
        //var angle = this.body.angle;
        push();
        //rotate(angle);
        rectMode(CENTER);
        //translate(pos.x,pos.y);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
    
    

}