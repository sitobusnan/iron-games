// Game constructor
function Game(canvasId, height) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth; // adjusts to screen width of the player (not responsive yet though)
  this.canvas.height = height;
  this.stars = [];
  this.starsX = [];
  this.starsY = [];
  this.mousePosX;
  this.mousePosY;
  this.starsOnCanvas = 3;
  this.displayTime = this.starsOnCanvas * 1000 + 500;
  this.currentCheck = 0;
  this.lives = 3;
  this.hints = 3;
  this.currentScore = 0;

  // sound variables
  this.clickSound = new Sound();

  // methods
  this.drawStarrySky();
  this.drawConnection();
  this.drawStartScore();


  // event listeners
  this.canvas.addEventListener('click', function(evt) {
    var rect = this.canvas.getBoundingClientRect();
    this.mousePosX = evt.clientX - rect.left;
    this.mousePosY = evt.clientY - rect.top;
    this.gamePlay();
    this.canvas.addEventListener("click", this.clickSound.playClickSound());
  }.bind(this), false);
  $("#click-hint").click((this.giveHint).bind(this));


  // reload button click event
  $('#reload').click(function() {
    location.reload();
  });
}

// draws a random star in a random position
Game.prototype.drawRandomStar = function() {
  // gets random number in between 2 numbers
  var maxSize = 8;
  var minSize = 3;
  var maxCanSize = 18;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // gets random position and size, makes sure the star doesnt fall on border
  var posX = Math.floor(Math.random() * ((this.canvas.width - maxCanSize) - maxCanSize + 1)) + maxCanSize;
  var posY = Math.floor(Math.random() * ((this.canvas.height - maxCanSize) - maxCanSize + 1)) + maxCanSize;
  var size = getRandomInt(maxSize, minSize);

  // creates a new star and pushes it into stars array
  var star = new Star(posX, posY, size);
  star.draw();
  this.stars.push(star);
  this.starsX.push(posX);
  this.starsY.push(posY);
};


// draws a random sky of stars with given amount of stars
Game.prototype.drawStarrySky = function() {
  for (var i = 0; i < this.starsOnCanvas; i++) {
    this.drawRandomStar();
  }
  this.markStar(0);
  this.originalStarrySky(this.displayTime);
};

// save stars before lines are drawn and displays original state after some secondss
Game.prototype.originalStarrySky = function(display) {
  var capture = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  setTimeout(function() {
    this.ctx.putImageData(capture, 0, 0);
  }.bind(this), display);
};


// draw the lines between the stars
Game.prototype.drawLine = function(src, dst) {
  this.ctx.globalCompositeOperation = 'destination-over';
  this.ctx.strokeStyle = "white";
  this.ctx.lineWidth = 3;
  this.ctx.beginPath();
  this.ctx.moveTo(src.x, src.y);
  this.ctx.lineTo(dst.x, dst.y);
  this.ctx.stroke();
  this.ctx.closePath();
};

// draws the connections between the stars
Game.prototype.drawConnection = function(i) {
  this.stars.forEach(function(star, i) {
    if (this.stars.length - 1 !== i) {
      setTimeout(function() {
        this.drawLine(star, this.stars[i + 1]);

      }.bind(this), 1000 * i);
    }
  }.bind(this));
};

// draws updated starrySky after a level has passed
Game.prototype.drawNewSky = function() {
  for (var i = 0; i < this.starsOnCanvas; i++) {
    var star = new Star(this.stars[i].x, this.stars[i].y, this.stars[i].r);
    star.draw();
  }
  this.markStar(0);
};

// sets the starting scores of the game
Game.prototype.drawStartScore = function() {
  $("#lives").html(this.lives);
  $("#hint").html(this.hints);
  $(".score").html(this.currentScore);
};

// function to mark a certain star yellow
Game.prototype.markStar = function(i) {
  var x = this.stars[i].x;
  var y = this.stars[i].y;
  var r = this.stars[i].r + 3;

  this.ctx.globalCompositeOperation = 'source-over';
  this.ctx.fillStyle = "#ffff33";
  this.ctx.beginPath();
  this.ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  this.ctx.fill();
  this.ctx.closePath();
};

Game.prototype.giveHint = function() {
  var mark = this.currentCheck;
  if (this.hints == 0) {
    setTimeout(function() {
      $("#no-hint").removeClass("hidden");
    }, 200);
    setTimeout(function() {
      $("#no-hint").addClass("fadeInAndOut");
    }, 200);
    setTimeout(function() {
      $("#no-hint").addClass("hidden");
    }, 2650);
    setTimeout(function() {
      $("#no-hint").removeClass("fadeInAndOut");
    }, 2800);

  } else {
    this.markStar(mark);
    this.hints -= 1;
    $("#hint").html(this.hints);
  }
};

// resets game after game over
Game.prototype.reset = function() {
  this.stars = [];
  this.starsX = [];
  this.starsY = [];
  this.starsOnCanvas = 3;
  this.mousePosX = 0;
  this.mousePosY = 0;
  this.currentCheck = 0;
  this.lives = 3;
  this.hints = 3;
  this.currentScore = 0;

  this.drawStarrySky();
  this.drawConnection();
  this.drawStartScore();
};

// gameplay method
Game.prototype.gamePlay = function() {
  // A: checks if mouseclick is on a current star
  if (Math.abs(this.mousePosX - this.stars[this.currentCheck].x) < 20) {
    if (Math.abs(this.mousePosY - this.stars[this.currentCheck].y) < 20) {

      // B: is it is, draws a line to the star and update score
      console.log("correct");
      if (this.currentCheck > 0) {
        this.drawLine(this.stars[this.currentCheck - 1], this.stars[this.currentCheck]);
      }
      this.currentCheck++;
      this.currentScore++;
      $(".score").html(this.currentScore);
      $("#score-container").addClass("blinkLine");
      setTimeout(function() {
        $("#score-container").removeClass("blinkLine");
      }, 1000);

      // C: if all correct stars are clicked, create extra star/new level
      if (this.currentCheck === this.starsOnCanvas) {

        // well done message
        setTimeout(function() {
          $("#well-done").removeClass("hidden");
        }, 200);
        setTimeout(function() {
          $("#well-done").addClass("fadeInAndOut");
        }, 200);
        setTimeout(function() {
          $("#well-done").addClass("hidden");
        }, 2650);
        setTimeout(function() {
          $("#well-done").removeClass("fadeInAndOut");
        }, 2800);

        // draws new star
        setTimeout(function() {
          this.starsOnCanvas += 1;
          this.drawRandomStar();
          this.drawLine(this.stars[this.currentCheck - 1], this.stars[this.currentCheck]);
          this.currentCheck = 0;
        }.bind(this), 3000);

        // clears canvas and paints new level
        setTimeout(function() {
          this.ctx.clearRect(0, 0, canvas.width, canvas.height);
          this.drawNewSky();
        }.bind(this), 5000);
      } // C: end
    } // B: end
  } // A: end

  // D: if mouseclick is not on correct star, remove live, if live = 0, game over
  else {
    // game over message if lives are all used
    if (this.lives === 1) {
      this.lives -= 1;
      $("#game-over").removeClass("hidden");
      $("#game-over").addClass("fadeIn");
      $("#lives").html(this.lives);

      setTimeout(function() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      }.bind(this), 1500);

    } else {
      // shows minus 1, removes a live
      this.lives -= 1;
      setTimeout(function() {
        $("#minus-one").removeClass("hidden");
      }, 200);
      setTimeout(function() {
        $("#minus-one").addClass("fadeInAndOut");
      }, 200);
      setTimeout(function() {
        $("#minus-one").addClass("hidden");
      }, 2650);
      setTimeout(function() {
        $("#minus-one").removeClass("fadeInAndOut");
      }, 2800);
      setTimeout(function() {
        $(".heart-icon").removeClass("fadeColorOut");
      }, 1500);
      $(".heart-icon").addClass("fadeColorOut");
      $("#lives").html(this.lives);
    }
  } // D: end
};
