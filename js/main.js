class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;
        this.updateUI();
    }

    updateUI() {
        const playerElm = document.getElementById("player");
        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vh";
        playerElm.style.width = this.width + "vw";
        playerElm.style.height = this.height + "vh";
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
            this.updateUI();
        }
    }

    moveRight() {
        if (this.positionX < 100 - this.width) {
            this.positionX++;
            this.updateUI();
        }
    }
}

class Obstacle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100;
        this.createDomElement();
        this.updateUI();
    }

    createDomElement() {
        this.obstacleElm = document.createElement("div");

        this.obstacleElm.className = "obstacle";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }

    updateUI() {
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";
    }

    moveDown() {
        this.positionY--;
        this.updateUI();
    }
}

const player = new Player();

const obstacleArr = []

// generar nuevos obstaculos

setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle);
}, 1000);

// mover todos los obstaculos

setInterval(() => {
    obstacleArr.forEach(function (obstacleInstance, i, arr) {

        // mover
        obstacleInstance.moveDown()

        // detectar colisiones
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log("game over bitch");

            location.href = "gameover.html";
        }
    })
}, 30);

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight") {
        player.moveRight();
    }
});
