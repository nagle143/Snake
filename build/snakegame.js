//Game.js

//Newer syntax
import Snake from './snake';
//const snake = require(./snake);

/** @class Game
* represents a snake Game
*/

class Game {
  constructor() {
    this.snake = new Snake();
    this.food = [];
    //Create the canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 100;
    document.body.appendChild(canvas);
    this.context = canvas.getContext('2d');
  }
  update() {
    this.snake.update();
  }
  render() {
    this.snake.render(context);
  }
}
