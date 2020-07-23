export default class Player {
  constructor(gameHeight, gameWidth, gridSize) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.gridSize = gridSize;
    // object size
    this.height = 30;
    this.width = 30;
    // object position
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };
    // tile position
    this.tilePosition = {
      x: Math.floor(this.position.x/this.gridSize),
      y: Math.floor(this.position.y/this.gridSize)
    }
    //movement value
    this.moveIncrement = {
      x: 30,
      y: 30,
    };
    // object velocaity
    this.vel = {
      x: 0,
      y: 0,
    };
    // speed
    this.speed = 10;
    // friction
    this.friction = 1 - this.speed / this.moveIncrement.x;
    // move interval (ms)
    this.moveInterval = 1000;
  }

  draw(ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return

    this._updatePosition()
    this._applyFriction()

    // collision detection? 
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  } //these will add the collision for both the right and left boundary

  moveRight() {
    this.vel.x = this.speed;
  }

  moveLeft() {
    this.vel.x = -this.speed;
  }

  // placeholder function
  start(mockData) {
    let i = 0;
    let interval = setInterval(() => {
      this._stringToFunction(mockData[i]);
      i++;
      if (i === mockData.length) clearInterval(interval);
    }, this.moveInterval);
  }

  _stringToFunction(input) {
    // eslint-disable-next-line default-case
    switch (input) {
      case "player.moveRight()":
        this.moveRight();
        break;
      case "player.moveLeft()":
        this.moveLeft();
        break;
    }
  }

  // only for X axis 
  _updatePosition() {
    // update px x-position
    this.position.x += this.vel.x;
    // update tile x-position
    this.tilePosition.x =  Math.floor(this.position.x/this.gridSize)
  }

  _applyFriction() {
    this.vel.x *= this.friction;
  }
}
