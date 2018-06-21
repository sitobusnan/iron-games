Background = function (game) {

  
this.game = game;
this.img = new Image();

// Initial background
this.img.src = "images/scene00.png";
this.x = 0;
this. y = 0;

this.lightsOn = false;
this.currentBackground = this.img.src;
this.previousBackground = this.currentBackground;

}


Background.prototype.changeBackground = function(id) {
  var sceneId = id;
  var backgroundCollection= [
    {
      id: "00",
      name: "living room dark",
      src: "images/scene00.png",
    },
    {
      id: "01",
      name: "living room light",
      src: "images/scene01.png",
    },
    {
      id: "02",
      name: "microwave closed",
      src: "images/microwave.png",
    },
    {
      id: "03",
      name: "maze kernels",
      src: "images/scene00_kernels.png",
    },
    {
      id: "04",
      name: "no kernels",
      src: "images/scene00_nokernels.png",
    },
    {
      id: "05",
      name: "closed microwave",
      src: "images/scene02_closedmic.png",
    },
    {
      id: "06",
      name: "open microwave",
      src: "images/scene02_openmic.png",
    },
    {
      id: "07",
      name: "closed cabinet",
      src: "images/scene04_closedcabinet.png",
    },

    {
      id: "08",
      name: "open cabinet",
      src: "images/scene04_opencabinet.png",
    },

    {
      id: "09",
      name: "missing bowl",
      src: "images/scene04_missingcabinet.png",
    },
    {
      id: "10",
      name: "popped corn",
      src: "images/scene02_popmic.png",
    },
    {
      id: "11",
      name: "frige picture",
      src: "images/scene7_fridge.png",
    },
    {
      id: "12",
      name: "birdhouse",
      src: "images/scene8_birdhouse.png",
    },
    {
      id: "13",
      name: "birdhouse+bowl",
      src: "images/scene8_birdhouse_bowl.png",
    },
    {
      id: "14",
      name: "birdhouse+bowl+pop",
      src: "images/scene8_birdhouse_pop.png",
    },
    {
      id: "15",
      name: "birdhouse+bird",
      src: "images/scene8_birdhouse_bird.png",
    },
    {
      id: "16",
      name: "corridor",
      src: "images/scene10.png",
    },
    {
      id: "17",
      name: "coffee",
      src: "images/scene11_cafe.png",
    },
    {
      id: "18",
      name: "pannel",
      src: "images/scene12_alert.png",
    },
    {
      id: "19",
      name: "elevatorQR",
      src: "images/scene13_qr.png",
    },
    {
      id: "20",
      name: "elevatorQR",
      src: "images/win.png",
    },
    {
      id: "21",
      name: "posterHallway",
      src: "images/scene14_notice.png",
    },





  ];
  
  this.previousBackground = this.currentBackground;
  this.img.src  = backgroundCollection[sceneId].src;
  this.currentBackground  = this.img.src;
}


// Used to change background automatically after some time.
Background.prototype.changeBackgroundLater = function(id, time, scene){
  setTimeout( function(){
    this.game.background.changeBackground(id)
    this.game.currentScene = scene;
  }.bind(this),time);

}
    

Background.prototype.draw = function (){

  this.game.ctx.drawImage(this.img, 0,0);
  
}

