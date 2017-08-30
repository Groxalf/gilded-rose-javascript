const SulfurasItem = require('./sulfuras_item');
const AgedBrieItem = require('./aged_brie_item');
const BackstagePassItem = require('./backstage_pass_item');

module.exports = function Item(name, sell_in, quality) {
    if (name === 'Sulfuras Hand of Ragnaros') return new SulfurasItem(name, sell_in, quality);
    if (name === 'Aged Brie') return new AgedBrieItem(name, sell_in, quality);
    if (name === 'Backstage passes to a TAFKAL80ETC concert') return new BackstagePassItem(name, sell_in, quality);
    return {
      name: name,
      sell_in: sell_in,
      quality: quality
    };
  }