function CreateBomb() {
    this.xB = 0;
    this.yB = 0;
    this.momentoDeCreacion = 0;
    this.activa = false;
}
//Algoritmo de la explosion
CreateBomb.prototype.explosion = function () {
    if (Date.now() - this.momentoDeCreacion > 3000) {
        this.activa = false;
        if (newBoard.map[this.yB - 1][this.xB] == 2) {
            newBoard.map[this.yB - 1][this.xB] = 0; // original
            for (var i = 0; i < newObs.powerUp; i++) {
                if (((Object.values(newObs.position[i]))[0] == (this.yB - 1) &&
                    Object.values(newObs.position[i])[1] == (this.xB))) {
                    newBoard.map[this.yB - 1][this.xB] = 4; // power up encontrado

                }
            }
        }
        if (newBoard.map[this.yB + 1][this.xB] == 2) {
            newBoard.map[this.yB + 1][this.xB] = 0; // original
            for (var i = 0; i < newObs.powerUp; i++) {
                if (((Object.values(newObs.position[i]))[1] == (this.yB + 1) &&
                    Object.values(newObs.position[i])[0] == (this.xB))) {
                    newBoard.map[this.yB + 1][this.xB] = 4; // power up encontrado
                }
            }
        }
        if (newBoard.map[this.yB][this.xB - 1] == 2) {
            newBoard.map[this.yB][this.xB - 1] = 0; // original
            for (var i = 0; i < newObs.powerUp; i++) {
                if (((Object.values(newObs.position[i]))[1] == (this.yB) &&
                    Object.values(newObs.position[i])[0] == (this.xB - 1))) {
                    newBoard.map[this.yB][this.xB - 1] = 4; // power up encontrado
                }
            }
        }
        if (newBoard.map[this.yB][this.xB + 1] == 2) {
            newBoard.map[this.yB][this.xB + 1] = 0; // original
            for (var i = 0; i < newObs.powerUp; i++) {
                if (((Object.values(newObs.position[i]))[1] == (this.yB) &&
                    Object.values(newObs.position[i])[0] == (this.xB + 1))) {
                    newBoard.map[this.yB][this.xB + 1] = 4; // power up encontrado
                }
            }
        }
        newBoard.map[this.yB][this.xB] = 0;
        if (newBoard.map[this.yB - 1][this.xB] == 0) {
            newBoard.map[this.yB - 1][this.xB] = 5
            setTimeout(() => {
                newBoard.map[this.yB - 1][this.xB] = 0;
            }, 1000);
        }
        if (newBoard.map[this.yB + 1][this.xB] == 0) {
            newBoard.map[this.yB + 1][this.xB] = 5;
            setTimeout(() => {
                newBoard.map[this.yB + 1][this.xB] = 0;
            }, 1000);
        }
        if (newBoard.map[this.yB][this.xB - 1] == 0) {
            newBoard.map[this.yB][this.xB - 1] = 5;
            setTimeout(() => {
                newBoard.map[this.yB][this.xB - 1] = 0;
            }, 1000);
        }
        if (newBoard.map[this.yB][this.xB + 1] == 0) {
            newBoard.map[this.yB][this.xB + 1] = 5;
            setTimeout(() => {
                newBoard.map[this.yB][this.xB + 1] = 0;
            }, 1000);
        }
        // PLAYER 1 MUERE
        if (((this.yB - 1 == Math.floor((bomberman1.y) / 64)) && (this.xB == Math.floor(bomberman1.x / 64))) ||
            ((this.yB + 1 == Math.floor((bomberman1.y) / 64)) && (this.xB == Math.floor(bomberman1.x / 64))) ||
            ((this.yB == Math.floor((bomberman1.y) / 64)) && (this.xB == Math.floor(bomberman1.x / 64))) ||
            ((this.yB == Math.floor((bomberman1.y) / 64)) && (this.xB - 1 == Math.floor(bomberman1.x / 64))) ||
            ((this.yB == Math.floor((bomberman1.y) / 64)) && (this.xB + 1 == Math.floor(bomberman1.x / 64)))) {
            bomberman1.isAlive = false;
        }
        // PLAYER 2 MUERE
        if (((this.yB - 1 == Math.floor((bomberman2.y) / 64)) && (this.xB == Math.floor(bomberman2.x / 64))) ||
            ((this.yB + 1 == Math.floor((bomberman2.y) / 64)) && (this.xB == Math.floor(bomberman2.x / 64))) ||
            ((this.yB == Math.floor((bomberman2.y) / 64)) && (this.xB == Math.floor(bomberman2.x / 64))) ||
            ((this.yB == Math.floor((bomberman2.y) / 64)) && (this.xB - 1 == Math.floor(bomberman2.x / 64))) ||
            ((this.yB == Math.floor((bomberman2.y) / 64)) && (this.xB + 1 == Math.floor(bomberman2.x / 64)))) {
            bomberman2.isAlive = false;
            //Comprobación de las muertes
        }
        if (bomberman1.isAlive && !bomberman2.isAlive) {
            alert("Ganador... Guybrush Threepwood!!!");
        }
        if (!bomberman1.isAlive && bomberman2.isAlive) {
            alert("Ganador... El temido pirata Le Marc!!");
        }
        if (!bomberman1.isAlive && !bomberman2.isAlive) {
            alert("E M P A T E !! :o")
        }
    }
}