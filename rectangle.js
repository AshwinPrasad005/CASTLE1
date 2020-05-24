class Rectangle{

    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
    
    

}