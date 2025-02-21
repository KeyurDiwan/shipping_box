import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { toast } from "react-toastify";
import ShippingFormContainer from "./ShippingFormContainer";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("ShippingFormContainer", () => {
  it("should display error messages on submit with invalid data", () => {
    render(<ShippingFormContainer />);
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Receiver name is required")).toBeInTheDocument();
    expect(screen.getByText("Weight is required")).toBeInTheDocument();
    expect(screen.getByText("Destination is required")).toBeInTheDocument();
  });

  it("should save data and show success message on submit with valid data", () => {
    render(<ShippingFormContainer />);

    fireEvent.change(screen.getByLabelText("Receiver Name:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Weight (kg):"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Destination Country:"), {
      target: { value: "Sweden" },
    });

    fireEvent.click(screen.getByText("Save"));

    expect(toast.success).toHaveBeenCalledWith(
      "Entry saved successfully!",
      expect.any(Object)
    );
  });
});
