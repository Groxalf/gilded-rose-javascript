const SulfurasItem = require('./sulfuras_item');
const AgedBrieItem = require('./aged_brie_item');
const BackstagePassItem = require('./backstage_pass_item');
const RegularItem = require('./regular_item');

module.exports = function Item(name, sell_in, quality) {
    if (name === 'Sulfuras Hand of Ragnaros') return new SulfurasItem(name, sell_in, quality);
    if (name === 'Aged Brie') return new AgedBrieItem(name, sell_in, quality);
    if (name === 'Backstage passes to a TAFKAL80ETC concert') return new BackstagePassItem(name, sell_in, quality);
    return new RegularItem(name, sell_in, quality);
  }