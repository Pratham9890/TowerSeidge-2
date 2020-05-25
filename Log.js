class Log extends BaseClasss{
  constructor(x,y,width,height,angle){
    super(x,y,width,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
}