const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'rgba(133, 39, 245, 0.3)';
    context.fillRect(0, 0, width, height);



    const agent1 = new Agent(540,540);
    agent1.drawCircle(context);

    
    num = 20;

    for (i = 0; i < num; i++) {


      //drawing the rectangles
      context.save();
      context.translate(random.range(20,1000), random.range(20,800));
      agent1.drawRect(context)
      context.restore();
  
    }

  };
};

canvasSketch(sketch, settings);

class Agent {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.colors = ['rgba(122, 255, 0, 0.15)', 'rgba(122, 255, 0, 1)', 'rgba(0, 255, 223, 1)', 'rgba(0, 255, 223, 0.17)' ]
  }

  drawCircle(context) {
    context.save();

    context.translate(this.posX, this.posY);
    
    context.lineWidth = 8;
    context.fillStyle = 'rgba(55, 0, 120, 1)';
    context.arc(0, 0, 80, 0, Math.PI*2);
    context.fill();
    context.restore();

    
  }

  drawRect(context) {
    const colorIndex = random.range(0, this.colors.length);
    const color = this.colors[colorIndex];
    context.save();
    context.fillStyle = color;
    context.fillRect(0, 100, 20, random.range(100,300));
    context.restore();
  }

}
