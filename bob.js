class Bob{
    constructor(x, y){
        var property = {
            isStatic: false
        }
        this.body = Bodies.circle(x, y ,30, property);
        this.radius = 30;
        World.add(world, this.body)
    };
    display(){
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(Bob.body.position.x, Bob.body.position.y, this.radius, this.radius);
    }
}