const SulfurasItem = require('./sulfuras_item');

module.exports = function Item(name, sell_in, quality) {
    if (name === 'Sulfuras Hand of Ragnaros') return SulfurasItem(sell_in, quality);
    return {
      name: name,
      sell_in: sell_in,
      quality: quality
    };
  }