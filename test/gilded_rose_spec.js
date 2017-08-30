const expect = require('chai').expect;

const {update_quality} = require('../src/gilded_rose');
const Item = require('../src/item')

describe("In the Gilded Rose", () => {
  function anItem({name, sell_in, quality} = {}) {
    return Item(name, sell_in, quality)
  }
  
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

  describe("Backstage passes to a TAFKAL80ETC concert item", () => {
    it("increases its quality when its selling day is greater or equal than 10 days to expire", () => {
      const item = anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 15, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(21);
    });

    it("increases its quality twice when its selling day is greater or equal than 10 days to expire", () => {
      const item = anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 10, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(22);
    });

    it("increases its quality by three times when its selling day is greater or equal than 5 days to expire", () => {
      const item = anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 5, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(23);
    });

    it("quality drops to zero when selling day passes", () => {
      const item = anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 0, quality: 20});
      update_quality([item]);
      expect(item.quality).to.equal(0);
    });

    it("decrease selling day by one when day passes", () => {
      const item = anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 1, quality: 20});
      update_quality([item]);
      expect(item.sell_in).to.equal(0);
    });
  });
});
