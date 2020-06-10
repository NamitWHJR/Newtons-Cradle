class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.0001,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

fly(){
    this.sling.bodyA = null
}


    display(){
        



    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);


    }
    
}