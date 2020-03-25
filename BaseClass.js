class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(248,15,85)
       rect(0, 0, this.width, this.height);
        pop();
      }
}