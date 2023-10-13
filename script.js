let cat = {
    weight: 1,
    feed: function () {
        if (this.weight < 2) {
            while (this.weight < 2) {
                this.weight += 0.1;
            }
        }
    },
    diet: function () {
        if (this.weight > 2) {
            while (this.weight > 2) {
                this.weight -= 0.1;
            }
        }
    },
    toString: function () {
        return `Weight: ${this.weight.toFixed(2)} kg`;
    }
}

cat.feed();
cat.diet();
alert(cat);