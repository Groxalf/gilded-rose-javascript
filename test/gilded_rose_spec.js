const expect = require('chai').expect;

const {update_quality} = require('../src/gilded_rose');
const Item = require('../src/item')

describe("In the Gilded Rose", () => {
  function anItem({name, sell_in, quality} = {}) {
    return Item(name, sell_in, quality)
  }  
  const allItems = []
  
  allItems.push(anItem({name: '+5 Dexterity Vest', sell_in: 10, quality: 20}));
  allItems.push(anItem({name: 'Aged Brie', sell_in: 2, quality: 0}));
  allItems.push(anItem({name: 'Elixir of the Mongoose', sell_in: 5, quality: 7}));
  allItems.push(anItem({name: 'Sulfuras, Hand of Ragnaros', sell_in: 0, quality: 80}));
  allItems.push(anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 15, quality: 20}));
  allItems.push(anItem({name: 'Conjured Mana Cake', sell_in: 3, quality: 6}));

  describe("A regular item", () => {
    it("degrades its quality when a day passes", () => {
      const item = anItem({name: 'Regular Item', sell_in: 10, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(19);
    });

    it("degrades its quality twice as fast when the selling day passes", () => {
      const item = anItem({name: 'Regular Item', sell_in: 0, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(18);
    });

    it("quality cannot be negative", () => {
      const item = anItem({name: 'Regular Item', sell_in: 0, quality: 0});
      update_quality([item]);
      expect(item.quality).to.equal(0);
    });

    it("decrease selling day by one when day passes", () => {
      const item = anItem({name: 'Regular Item', sell_in: 1, quality: 20});
      update_quality([item]);
      expect(item.sell_in).to.equal(0);
    });
  });

  describe("The Aged Brie item", () => {
    it("increases its quality when a day passes", () => {
      const item = anItem({name: 'Aged Brie', sell_in: 10, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(21);
    });

    it("increases its quality twice when the selling day expires", () => {
      const item = anItem({name: 'Aged Brie', sell_in: 0, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(22);
    });

    it("does not increase its value when it gets its maximum quality", () => {
      const item = anItem({name: 'Aged Brie', sell_in: 10, quality: 50});
      update_quality([item]);
      expect(item.quality).to.equal(50);
    });

    it("decrease selling day by one when day passes", () => {
      const item = anItem({name: 'Aged Brie', sell_in: 1, quality: 20});
      update_quality([item]);
      expect(item.sell_in).to.equal(0);
    });
  });

  describe("The Sulfuras Hand of Ragnaros item", () => {
    it("never gets altered its quality when a day passes", () => {
      const item = anItem({name: 'Sulfuras, Hand of Ragnaros', sell_in: 0, quality: 80});
      update_quality([item]);
      expect(item.quality).to.equal(80);
    });

    it("never gets altered its selling day when a day passes", () => {
      const item = anItem({name: 'Sulfuras, Hand of Ragnaros', sell_in: 0, quality: 80});
      update_quality([item]);
      expect(item.sell_in).to.equal(0);
    });
  });
});
