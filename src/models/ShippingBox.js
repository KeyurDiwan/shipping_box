export class ShippingBox {
  constructor(receiverName, weight, boxColor, rgbColor, destination) {
    this.receiverName = receiverName;
    this.weight = weight;
    this.boxColor = boxColor;
    this.rgbColor = rgbColor;
    this.destination = destination;
    this.date = new Date().toISOString();
  }

  calculateCost(destinationRates) {
    return this.weight * (destinationRates[this.destination]?.rate || 0);
  }

  validate() {
    const errors = {};
    if (!this.receiverName.trim())
      errors.receiverName = "Receiver name is required";
    if (!this.weight) errors.weight = "Weight is required";
    if (parseFloat(this.weight) < 0)
      errors.weight = "Weight cannot be negative";
    if (!this.destination) errors.destination = "Destination is required";
    return errors;
  }
}
