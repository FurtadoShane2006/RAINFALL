class Water{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0.1,
            'density':1.2
        }
       
        this.Trajectory=[];

        this.body=Bodies.circle(this.x,this.y,10,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }

    display(){
       
        push ();
            translate (this.body.position.x,this.body.position.y);
            if(this.drop.position.y>675){
                Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
            }

            max=100;
            for(i=0;i<max;i++) {
                ellipseMode(CENTER);
                ellipse(this.x,this.y,5,5);
            }
            pop ();
       
    }
}