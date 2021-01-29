class Umbrella{
    constructor(){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(100,290,50,160,options);
        this.x=100;
        this.y=290;
        this.body=loadImage("Walking Frame/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        push ();
            translate (this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.image,100,290,50,160);
        pop ();
    }
}