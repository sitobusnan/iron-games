var Cookies = function(game) {
    this.game = game;
    
    this.maxpoints;
        

}
Cookies.prototype.create = function(){    
    document.cookie ="Points: " + encodeURIComponent(this.game.points.point);
}
Cookies.prototype.read = function(){
    
    this.maxpoints = this.maxpoints.replace(/[a-z, A-Z]/g, '');
}
Cookies.prototype.mod = function() {
    
}
Cookies.prototype.crearCookie = function(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
    this.maxpoints = document.cookie;
}

Cookies.prototype.obtener = function(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
Cookies.prototype.control = function() {
    if (!this.obtener("Points")) {
        this.crearCookie("Points", this.game.points.point, 60)
    }
    this.maxpoints = this.obtener("Points");
    this.read();
    if (this.maxpoints < this.game.points.point) {
        this.crearCookie("Points", this.game.points.point, 60);
        this.game.points.drawRecord();
    }
}
