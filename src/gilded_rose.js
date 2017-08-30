module.exports = {
  update_quality(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].age();
    }
  }
}
