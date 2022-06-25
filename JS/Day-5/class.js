class Console {
  constructor(brand, color, plugType, version, displayPlug) {
    this.brand = brand;
    this.color = color;
    this.plugType = plugType;
    this.version = version;
    this.displayPlug = displayPlug;
  }
}

const xbox = Console("Microsoft", "White", "A", "1S", "HDMI");
console.log(xbox);
