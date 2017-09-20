
//Constructor
function Snake() {
  this.cellsize= 10
  this.width = 15
  this.height = 15
  this.snake =[{x:7, y:7}, {x:6,y:7}, {x:5,y:7}]
  this.direction = 'right'
  this.food = []
  //Canvas element
  var Canvas = document.createElement('Canvas');
  Canvas.width = this.width * this.cellsize;
  Canvas.height = this.height * this.cellsize;
  document.body.appendChild(Canvas);
  this.ctx = Canvas.getContext('2d');

  //window.onKeyPress = this.handleKeyDown();

  setInterval(() => this.Loop(), 1000);
}

/*Snake.prototype.handleKeyDown = function(event) {
  swithc(event.keyCode) {
    case 'w':
      break;
    case 'a':
      break;
    case 's':
      break;
    case 'd':
      break;
  }
}*/

Snake.prototype.render = function() {
  this.ctx.fillStyle = '#000';
  this.ctx.fillRect(0, 0, this.width * this.cellsize, this.height * this.cellsize);
  //Draw the snake
  this.ctx.fillStyle = 'green';
  this.snake.forEach((segment) => {
    this.ctx.fillRect(segment.x * this.cellsize, segment.y * this.cellsize,
    this.cellsize, this.cellsize)
  });
  this.ctx.fillStyle = 'gold';
  this.food.forEach((food) => {
    this.ctx.fillRect(segment.x * this.cellsize, segment.y * this.cellsize,
    this.cellsize, this.cellsize);
  });
}

/**@method update

*/
Snake.prototype.update = function() {
  var x = this.snake[0].x;
  var y = this.snake[0].y;
  switch(this.direction) {
    case 'right':
      x++;
      break;
    case 'left':
      x--;
      break;
    case 'up':
      y--;
      break;
    case 'down':
      y++;
      break;
  }
  if(x< 0 || x > this.width || y < 0 || y > this.height)
  {
    new Snake();
    return;
  }
    this.snake.pop();
    this.snake.unshift({x: x, y: y});
}

Snake.prototype.Loop = function() {
  this.update();
  this.render();
}

new Snake();
