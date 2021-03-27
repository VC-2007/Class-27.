class Chain{
    //Constructor is like a setup and Dispay is like a Draw of a class.
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.04
        }
        this.body = Constraint.create(options);

        World.add(world,this.body);


    }

    display(){
        //nameSpacing
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        
        // line(x1,y1,x2,y2) 
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        

    }


}