function Player(x, y, bg, name,w,h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.vx = 7;
    this.vy = 7;
    this.bg = bg;
    this.frogInAir = [false, false];
    this.element = $("<div>").attr("class", name);
    this.element.css({ bottom: this.y, left: this.x, position: "absolute", background: "url(" + this.bg + ") no-repeat", height: this.h, width: this.w, "background-size": "cover" });
    $("#board").append(this.element);
    this.canIExecute=true;
    this.directionRigth=true;

}
Player.prototype.moveRightOne = function () {
        if (this.x < 900) {
            this.x += this.vx;
            var a = (this.x - 400) ** 2;
            this.y = (a - 101000) / -301;
        }
        if (this.y < 50 && this.x > 400) {
            this.y = 50;
            this.x = 695;
            this.element.css({ "background": "url(./img/julio-d.png)", "background-size": "cover" });
            this.element.removeClass("right").addClass("left");
            this.frogInAir[0] = false;
        }
}
Player.prototype.moveLeftOne = function () {
    if (this.x > 100) {
        this.x -= this.vx;
        var a = (this.x - 400) ** 2;
        this.y = (a - 101000) / -301;
    }
    if (this.y < 50 && this.x < 400) {
        this.y = 50;
        this.x = 100;
        this.element.css({ "background": "url(./img/julio-i.png)", "background-size": "cover" });
        this.element.removeClass("left").addClass("right");
        this.frogInAir[1] = false;
    }
}

Player.prototype.eat = function (){

    $(".insectOne").css("display","none"); 

}
Player.prototype.render = function () {
    this.element.css({ bottom: this.y, left: this.x });
}
Player.prototype.delay = function(){
    this.canIExecute = false
    var that = this;
    setTimeout(function(){
        that.canIExecute = true;
    },2080)
}









