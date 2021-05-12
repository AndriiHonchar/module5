class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
  return this.price;
  }
  changePrice(newPrice) {
  this.price = newPrice;
  }
}
