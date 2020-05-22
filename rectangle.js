class Rectangle{

    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y.witdh,height,option);
        this.height = height;
        this.width = width;
        World.add(world,this.body);

    }

     display(){

        //var angle = this.body.angle;
        push();
        
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()

    }
    
    

}