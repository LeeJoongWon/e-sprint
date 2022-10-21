const Bee = require('./Bee');

class ForagerBee extends Bee {
    // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = `find pollen`;
        this.canFly = true;
        this.treasureChest = [];
    }
    forage(data) {
        this.treasureChest.push(data);
    }
}

module.exports = ForagerBee;
