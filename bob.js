class Bob{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':3.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("crumple.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
  }