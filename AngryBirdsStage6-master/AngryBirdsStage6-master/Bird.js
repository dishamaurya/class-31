class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

  

    super.display();
    //to store the x and y position of the bird body inide the position array
    var position = [this.body.position.x, this.body.position.y];

    //pushing the position array inside the emptym trajectory array
    this.trajectory.push(position);

    for(var i = 0; i < this.trajectory.length; i++ ){

      //image(image,x,y)    x =[0], y=[1],,,,, [i]   [i][0],[i][1]]
      image(this.smokeImg, this.trajectory [i][0], this.trajectory [i][1]);
    }
  }
}
