class Triangle {
    constructor(x, y, height, angle) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 50, height, options);
      Matter.Body.setAngle(this.body,angle);
      this.width = 50;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){                         
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      fill("red")
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
  };
  