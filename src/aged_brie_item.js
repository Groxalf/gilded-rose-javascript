module.exports = function AgedBrieItem(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;

    this.age = () => {
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
        this.sell_in = this.sell_in - 1;
        if (this.sell_in < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
    }
}