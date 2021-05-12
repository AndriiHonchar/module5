class Car {
 #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
  return this.#brand;
  }
  changeBrand(newBrand) {
  this.#brand = newBrand;
  }
}