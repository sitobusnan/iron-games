/**
* ITEMS CONSTRUCTOR
* Sets up an inventory for the game
* 
*/

Items = function (game) {
  

  this.game = game;
  this.img = new Image();
  this.x = 40;
  this.y = 15;


  this.inventory = [{
      name: '#corn',
      scene: 01,
      owned: false,
      src: 'images/items/corn.png',
    },
    {
      name: '#bowl',
      scene: 01,
      owned: false,
      src: 'images/items/bowl.png',
    },
    {
      name: '#pop',
      scene: 01,
      owned: false,
      src: 'images/items/pop.png',
    },
    {
      name: '#key',
      scene: 01,
      owned: false,
      src: 'images/items/key.png',
    }
  ];
}

// ADDS ITEM TO THE INVENTORY
Items.prototype.addItem = function (itemName) {
  for (let i = 0; i < this.game.items.inventory.length; i++) {
    if (this.game.items.inventory[i].name === itemName) {
      this.game.items.inventory[i].owned = true
      $(this.game.items.inventory[i].name).addClass("owned").removeClass("not-owned");
    }
  }
  console.table(this.inventory);
}

// REMOVE ITEM FROM THE INVENTORY
Items.prototype.removeItem = function (itemName) {
  for (let i = 0; i < this.game.items.inventory.length; i++) {
    if (this.game.items.inventory[i].name === itemName) {
       $(this.game.items.inventory[i].name).addClass("not-owned").removeClass("owned");
    }
  }
}

/**
* INVENTORY UI AND DOM MANIPULATION
* Shows owned item on the iventory bar
* Sets up the interaction with the items 
**/


$(".inventory div").click(function () {
  if ($(this).hasClass("selected")) {
    $(".inventory div").removeClass("selected");
  } else {
    $(".inventory div").not(this).removeClass("selected");
    $(this).addClass("selected");
  }
});