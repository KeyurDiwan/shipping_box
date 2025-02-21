import React from "react";
import { render, screen } from "@testing-library/react";
import ShippingForm from "./ShippingForm";

describe("ShippingForm", () => {
  const formData = {
    receiverName: "",
    weight: "",
    boxColor: "#ffffff",
    rgbColor: "rgb(255, 255, 255)",
    destination: "",
  };
  const errors = {};
  const destinations = {
    Sweden: { rate: 7.35, currency: "INR" },
    China: { rate: 11.53, currency: "INR" },
    Brazil: { rate: 15.63, currency: "INR" },
    Australia: { rate: 50.09, currency: "INR" },
  };
  const handleChange = jest.fn();
  const handleSubmit = jest.fn((e) => e.preventDefault());
  const hexToRgb = jest.fn();
  const isFormDataValid = jest.fn(() => true);

  it("should render form fields correctly", () => {
    render(
      <ShippingForm
        formData={formData}
        errors={errors}
        destinations={destinations}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        hexToRgb={hexToRgb}
        isFormDataValid={isFormDataValid}
      />
    );

    expect(screen.getByLabelText(/Receiver Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight \(kg\):/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Box Color:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Destination Country:/i)).toBeInTheDocument();
  });
});
