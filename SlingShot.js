class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 25
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);

        World.add(world, this.Sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.Sling.bodyA = null;
    }

    display(){

        if (this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white")
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}