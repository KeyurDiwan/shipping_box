import { ShippingBox } from "./ShippingBox";

describe("ShippingBox", () => {
  const destinationRates = {
    Sweden: { rate: 7.35, currency: "INR" },
    China: { rate: 11.53, currency: "INR" },
    Brazil: { rate: 15.63, currency: "INR" },
    Australia: { rate: 50.09, currency: "INR" },
  };

  it("should calculate cost correctly", () => {
    const shippingBox = new ShippingBox(
      "John Doe",
      10,
      "#ffffff",
      "rgb(255, 255, 255)",
      "Sweden"
    );
    const cost = shippingBox.calculateCost(destinationRates);
    expect(cost).toBe(73.5);
  });

  it("should validate correctly", () => {
    const shippingBox = new ShippingBox(
      "",
      -5,
      "#ffffff",
      "rgb(255, 255, 255)",
      ""
    );
    const errors = shippingBox.validate();
    expect(errors).toEqual({
      receiverName: "Receiver name is required",
      weight: "Weight cannot be negative",
      destination: "Destination is required",
    });
  });

  it("should not return errors for valid data", () => {
    const shippingBox = new ShippingBox(
      "John Doe",
      10,
      "#ffffff",
      "rgb(255, 255, 255)",
      "Sweden"
    );
    const errors = shippingBox.validate();
    expect(errors).toEqual({});
  });
});
