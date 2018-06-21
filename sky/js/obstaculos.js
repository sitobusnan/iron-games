
function Obstacle (canvas, ctx) {
    var randomPosX = Math.random()*(canvas.width)
    var randomPosY = Math.ceil(Math.random()*((canvas.height*2)-canvas.height)+canvas.height)
    this.x = randomPosX;
    this.y = randomPosY;
    this.vx = 0;
    this.vy = -7;
    this.radius = 15;
    this.height = 110;
    this.width = 90;
    this.image = new Image();
    this.color = "red";
    this.ctx = ctx;
    this.isAlive = true;
} 

Obstacle.prototype.draw = function (){
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    // this.ctx.closePath();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
    this.image.src = "./images/Tree.png";
    this.ctx.drawImage(this.image, (this.x-30), (this.y-35), this.width, this.height);
}

Obstacle.prototype.update = function (){
    this.y += this.vy;
    this.draw();
}

Obstacle.prototype.collisionTop = function (){
    if(this.y <= -60){
        this.isAlive = false;
    }
}



