export default class Car {
  constructor(brand, motor, color) {
    this.brand = _brand;
    this.motor = _motor;
    this.color = _color;
  }

  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
