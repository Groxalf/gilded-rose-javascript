chai.should();

describe("Gilded Rose", () => {
  function anItem({name, sell_in, quality} = {}) {
    return Item(name, sell_in, quality)
  }  
  const items = []
  
  items.push(anItem({name: '+5 Dexterity Vest', sell_in: 10, quality: 20}));
  items.push(anItem({name: 'Aged Brie', sell_in: 2, quality: 0}));
  items.push(anItem({name: 'Elixir of the Mongoose', sell_in: 5, quality: 7}));
  items.push(anItem({name: 'Sulfuras, Hand of Ragnaros', sell_in: 0, quality: 80}));
  items.push(anItem({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 15, quality: 20}));
  items.push(anItem({name: 'Conjured Mana Cake', sell_in: 3, quality: 6}));

  it("should do something", () => {
    update_quality(items);
    (true).should.be.true;
  });

});
