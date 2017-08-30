module.exports = {
  update_quality(items) {
    items.forEach((item) => {
      item.age();
    });
  }
}
