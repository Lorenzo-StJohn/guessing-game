class GuessingGame {
    constructor() {
        this.minV = 1;
        this.maxV = 1;
        this.midV = 1;
    }

    setRange(min, max) {
        this.minV = min + 1;
        this.maxV = max - 1;
    }

    guess() {
        this.midV = Math.ceil((this.minV + this.maxV) / 2);
        return this.midV;
    }

    lower() {
        this.maxV = this.midV - 1;
    }

    greater() {
        this.minV = this.midV + 1;
    }

}

module.exports = GuessingGame;
