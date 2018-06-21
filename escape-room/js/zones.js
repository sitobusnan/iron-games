Zones = function (game) {
  this.game = game;
  this.anchor = 0;



  /**
   * LIST OF CLICKABLE ZONES
   * A zone must include a name (id) and the (scene) in which it's used
   * Coordinates are setup as such:
   * startX and endX for the starting and ending horizontal points
   * startY and endY for the starting and ending vertical points 
   * Action is the name of the function to load on click
   */

  this.zoneList = [{
      id: "back",
      scene: 1,
      startX: 831,
      endX: 998,
      startY: 5,
      endY: 50,
      color: "black",
      action: this.game.actions.back,
    },
    {
      id: "door",
      scene: 0,
      startX: 77,
      endX: 186,
      startY: 292,
      endY: 504,
      color: "black",
      action: this.game.actions.scene0Door,
      back: false,
    },

    {
      id: "lightswitch",
      scene: 0,
      startX: 220,
      endX: 238,
      startY: 394,
      endY: 418,
      color: "black",
      action: this.game.actions.scene0Lightswitch,
      back: false,
    },

    {
      id: "fridge",
      scene: 0,
      startX: 488,
      endX: 530,
      startY: 327,
      endY: 354,
      color: "black",
      action: this.game.actions.scene0Fridge,
      back: false,
    },
    {
      id: "microwave",
      scene: 0,
      startX: 341,
      endX: 398,
      startY: 395,
      endY: 428,
      color: "black",
      action: this.game.actions.scene2Microwave,
      back: true,
    },
    {
      id: "bowl",
      scene: 0,
      startX: 670,
      endX: 705,
      startY: 425,
      endY: 440,
      color: "black",
      action: this.game.actions.scene0Bowl,
      back: true,
    },
    {
      id: "window",
      scene: 0,
      startX: 592,
      endX: 905,
      startY: 237,
      endY: 355,
      color: "black",
      action: this.game.actions.scene0Window,
      back: false,
    },
    {
      id: "cupboard",
      scene: 0,
      startX: 398,
      endX: 455,
      startY: 450,
      endY: 490,
      color: "black",
      action: this.game.actions.scene4cupboard,
      back: false,
    },
    {
      id: "popcorn",
      scene: 1,
      startX: 490,
      endX: 568,
      startY: 333,
      endY: 385,
      color: "black",
      action: this.game.actions.scene0Maze,
    },
    {
      id: "open microwave",
      scene: 2,
      startX: 755,
      endX: 835,
      startY: 418,
      endY: 446,
      color: "black",
      action: this.game.actions.scene2MicrowaveOpen,
    },
    {
      id: "insert microwave",
      scene: 3,
      startX: 300,
      endX: 603,
      startY: 334,
      endY: 400,
      color: "black",
      action: this.game.actions.scene2MicrowaveInsert,
    },
    {
      id: "open cabinet",
      scene: 4,
      startX: 500,
      endX: 550,
      startY: 150,
      endY: 370,
      color: "black",
      action: this.game.actions.scene4CupboardOpen,
    },
    {
      id: "pick bowl",
      scene: 5,
      startX: 560,
      endX: 690,
      startY: 220,
      endY: 300,
      color: "black",
      action: this.game.actions.scene4CupboardPick,
    },
    {
      id: "pick pop",
      scene: 6,
      startX: 260,
      endX: 690,
      startY: 220,
      endY: 400,
      color: "black",
      action: this.game.actions.scene2MicrowaveInsert,
    },
    {
      id: "birdhouse",
      scene: 0,
      startX: 933,
      endX: 953,
      startY: 320,
      endY: 360,
      color: "black",
      action: this.game.actions.scene7Birdhouse,
    },
    {
      id: "birdhouse bowl",
      scene: 8,
      startX: 480,
      endX: 800,
      startY: 418,
      endY: 555,
      color: "black",
      action: this.game.actions.scene8BirdhouseBowl,
    },
    {
      id: "birdhouse bowl",
      scene: 9,
      startX: 480,
      endX: 800,
      startY: 418,
      endY: 555,
      color: "black",
      action: this.game.actions.scene8BirdhouseBowl,
    },
    {
      id: "birdhouse bowl",
      scene: 10,
      startX: 480,
      endX: 800,
      startY: 418,
      endY: 555,
      color: "black",
      action: this.game.actions.scene15TakeKey,
    },
    {
      id: "door_exit",
      scene: 16,
      startX: 77,
      endX: 186,
      startY: 292,
      endY: 504,
      color: "black",
      action: this.game.actions.scene20Exit,
      back: false,
    },
    {
      id: "elevator door",
      scene: 20,
      startX: 415,
      endX: 600,
      startY: 228,
      endY: 500,
      color: "black",
      action: this.game.actions.scene23elevatordoor,
      back: false,
    },
    {
      id: "hallway poster",
      scene: 20,
      startX: 90,
      endX: 130,
      startY: 309,
      endY: 356,
      color: "black",
      action: this.game.actions.scene25poster,
      back: false,
    },
    {
      id: "elevator pannel",
      scene: 20,
      startX: 640,
      endX: 666,
      startY: 350,
      endY: 386,
      color: "black",
      action: this.game.actions.scene22pannel,
      back: true,
    },
    {
      id: "coffee cup",
      scene: 20,
      startX: 381,
      endX: 403,
      startY: 438,
      endY: 453,
      color: "black",
      action: this.game.actions.scene21coffee,
      back: true,
    },

    {
      id: "back2",
      scene: 30,
      startX: 841,
      endX: 998,
      startY: 5,
      endY: 30,
      color: "black",
      action: this.game.actions.back2,
    },
    {
      id: "bypass",
      scene: 25,
      startX: 397,
      endX: 570,
      startY: 377,
      endY: 406,
      color: "black",
      action: this.game.actions.scene24bypass,
    },
    
  ];


}

/**
 * DRAWING FUNCTIONS
 * drawZone(): draws a rectangle from the zones starting and ending points
 * Also, it can take a color parameter
 * renderAll(): draws all the elements in zoneLise[]
 */

Zones.prototype.activateBack = function (newScene) {
  this.zoneList[6].scene = newScene;
}

Zones.prototype.drawZone = function (startX, endX, startY, endY, color) {

  this.game.ctx.globalAlpha = 1;
  this.game.ctx.fillStyle = color;
  this.game.ctx.fillRect(startX, startY, endX - startX, endY - startY)
  this.game.ctx.globalAlpha = 1;
}

// Renders all the zones in the list
Zones.prototype.renderAll = function () {
  var items = this.zoneList.length;

  for (let i = 0; i < items; i++) {

    if (this.zoneList[i].scene === this.game.currentScene) {
      this.drawZone(
        this.zoneList[i].startX,
        this.zoneList[i].endX,
        this.zoneList[i].startY,
        this.zoneList[i].endY,
        this.zoneList[i].color
      )
    }
  }
}


/**
 * COLLISION CHECK
 * checkHit(): function that goes around all the elements in the array
 * and checks if the user's click match the position of one of them.
 * Returns TRUE is there's a collision and FALSE if there isn't
 */

Zones.prototype.checkHit = function (mouseX, mouseY) {

  // Subtract offset of canvas on page to get accurate clicks

  var myMouseX = parseInt(mouseX) - this.game.offsetX;
  var myMouseY = parseInt(mouseY) - this.game.offsetY;


  console.log("Cursor X: " + myMouseX + " · Y: " + myMouseY);

  for (let i = 0; i < this.zoneList.length; i++) {
    // Click conditions
    if (myMouseX >= this.zoneList[i].startX &&
      myMouseX <= this.zoneList[i].endX &&
      myMouseY >= this.zoneList[i].startY &&
      myMouseY <= this.zoneList[i].endY &&
      this.zoneList[i].scene == this.game.currentScene
    )
    // Trigger when element clicked
    {
      if (Math.abs(this.game.hero.x - this.zoneList[i].endX) > Math.abs(this.game.hero.x - this.zoneList[i].startX)) {
        this.anchor = (this.zoneList[i].endX + this.zoneList[i].startX) / 2 - 80;
      } else {
        this.anchor = (this.zoneList[i].endX + this.zoneList[i].startX) / 2 - 20;
      }
      this.zoneList[i].action.bind(this).call(this.anchor);

    }
  }
}