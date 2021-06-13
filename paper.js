class Paper 
{

    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=60;
		this.paperHeight=60;
		this.body=Bodies.circle(x,y,60)
		World.add(world,this.body)
		
		
		this.image=loadImage("paper.png")
    }
	display(){
		imageMode(CENTER)
		image(this.image,this.body.position.x,this.body.position.y,this.paperWeight,this.paperHeight)
	}










}







