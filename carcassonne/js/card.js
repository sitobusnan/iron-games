//0: verde - 1: castillo - 2: camino

function Card() {
  this.deck = [
    { name: "opposite-castles",     img: "castle-green-castle-green.svg", top: "castle", right: "green", bottom: "castle", left: "green" },
    { name: "opposite-castles",     img: "castle-green-castle-green.svg", top: "castle", right: "green", bottom: "castle", left: "green" },
    { name: "opposite-castles",     img: "castle-green-castle-green.svg", top: "castle", right: "green", bottom: "castle", left: "green" },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "cross",                img: "green-road-road-road-cross.svg", top: "green", right: "road",  bottom: "road",   left: "road"  },
    { name: "cross",                img: "green-road-road-road-cross.svg", top: "green", right: "road",  bottom: "road",   left: "road"  },
    { name: "castle",               img: "castle-green-green-green.svg",  top: "castle", right: "green", bottom: "green",  left: "green" },
    { name: "double-castle-cross",  img: "castle-road-castle-road.svg",   top: "castle", right: "road",  bottom: "castle", left: "road"  },
    { name: "double-castle-cross",  img: "castle-road-castle-road.svg",   top: "castle", right: "road",  bottom: "castle", left: "road"  },
    { name: "double-castle",        img: "castle-castle-green-green.svg", top: "castle", right:"castle", bottom: "green",  left: "green" },
    { name: "double-castle",        img: "castle-castle-green-green.svg", top: "castle", right:"castle", bottom: "green",  left: "green" },
    { name: "double-castle",        img: "castle-castle-green-green.svg", top: "castle", right:"castle", bottom: "green",  left: "green" },
    { name: "castle-road",          img: "castle-road-green-road.svg",    top: "castle", right: "road",  bottom: "green",  left: "road"  },
    { name: "castle-road",          img: "castle-road-green-road.svg",    top: "castle", right: "road",  bottom: "green",  left: "road"  },
    { name: "castle-road",          img: "castle-road-green-road.svg",    top: "castle", right: "road",  bottom: "green",  left: "road"  },
    { name: "castle-road",          img: "castle-road-green-road.svg",    top: "castle", right: "road",  bottom: "green",  left: "road"  },
    { name: "curve",                img: "green-green-road-road.svg",     top: "green",  right: "green", bottom: "road",   left: "road"  },
    { name: "curve",                img: "green-green-road-road.svg",     top: "green",  right: "green", bottom: "road",   left: "road"  },
    { name: "curve",                img: "green-green-road-road.svg",     top: "green",  right: "green", bottom: "road",   left: "road"  },
    { name: "castle-curve",         img: "castle-green-road-road.svg",    top: "castle", right: "green", bottom: "road",   left: "road"  },
    { name: "castle-curve",         img: "castle-green-road-road.svg",    top: "castle", right: "green", bottom: "road",   left: "road"  },
    { name: "road",                 img: "green-road-green-road.svg",     top: "green",  right: "road",  bottom: "green",  left: "road"  },
    { name: "road",                 img: "green-road-green-road.svg",     top: "green",  right: "road",  bottom: "green",  left: "road"  },
    { name: "road",                 img: "green-road-green-road.svg",     top: "green",  right: "road",  bottom: "green",  left: "road"  },
    { name: "double-castle-road",   img: "castle-castle-road-road.svg",   top: "castle",  right: "castle",bottom: "road",  left: "road"  },
    { name: "double-castle-road",   img: "castle-castle-road-road.svg",   top: "castle",  right: "castle",bottom: "road",  left: "road"  },
  ];
}

Card.prototype.shuffle = function() {
  var array = this.deck;
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  this.deck = array;

  return this.deck;
};

Card.prototype.createDeck = function() {
  this.shuffle();
  var html = '';

  this.deck.forEach(function(pic, index) {

    html += '<div class= "card" name="card_' + pic.name + '" data-top="' + pic.top +'" data-right="' + pic.right +'" data-bottom="' + pic.bottom +'" data-left="' + pic.left + '">';
      html += '<div class="back"';
      html += '    name="' + pic.name + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/pieces/' + pic.img + '") no-repeat"';
      html += '    name="'       + pic.name +  '">';
      html += '</div>';
    html += '</div>';
  });

  document.getElementById('deck').innerHTML = html;
};

Card.prototype.selectCard = function() {
  $('.card .back').mousedown(function() {
    $(this).addClass('front').removeClass('back');
    $(this).siblings().addClass('back').removeClass('front');
  });
};

Card.prototype.drag = function() {
  $(".score .card").draggable({
    snap: ".initial",
    snapMode: "inner",
    revert: "invalid",
    revertDuration: 600,
    helper: "clone",
  });
};

Card.prototype.remainingCards = function() {
  var deckCards = $("#deck").children().length;

  $("#remaining-cards-info span").text(deckCards);
};
