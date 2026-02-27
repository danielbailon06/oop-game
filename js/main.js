class Player {
    constructor() {
        this.positionX = 0;
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

const player = new Player();

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight") {
        player.moveRight();
    }
});
