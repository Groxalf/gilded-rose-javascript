module.exports = function SulfurasItem(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;

    this.age = () => {
        this.sell_in = this.sell_in - 1;
        if (this.quality > 0) {
            this.quality = this.quality - 1
        }
        if (this.sell_in < 0) {
            if (this.quality > 0) {
                this.quality = this.quality - 1
            }
        }
    };
}