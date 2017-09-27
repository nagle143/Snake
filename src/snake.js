//Snake.js

/** @class Snake
* The snake in the Game
*/

export default class Snake {
  constructor(x, y, segment) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - i,
        y: y
      });
    }
    this.direction = 'right';
    //this.segmentSize = 15;
  }

  checkForConsumption(food) {

  }

  update() {
    //Did we crash?
    //Did we eat ourself?
    //Did we eat food?
    //Do we need to grow?
  }

  render(ctx) {
      this.body.forEach(function(segment) {
        ctx.save();
        ctx.fillStyle = 'green';
        ctx.fillRect(
          segment.x,
          segment.y,
          1,
          1
        );
        ctx.restore();
      });
  }


}
