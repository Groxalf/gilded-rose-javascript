describe("Gilded Rose", () => {
  const items = []
  
  items.push(Item('+5 Dexterity Vest', 10, 20));
  items.push(Item('Aged Brie', 2, 0));
  items.push(Item('Elixir of the Mongoose', 5, 7));
  items.push(Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(Item('Conjured Mana Cake', 3, 6));

  it("should do something", () => {
    update_quality(items);
  });

});
