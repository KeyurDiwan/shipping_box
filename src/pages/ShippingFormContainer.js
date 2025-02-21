import React, { useState } from "react";
import { toast } from "react-toastify";
import { ShippingBox } from "../models/ShippingBox";
import ShippingForm from "../components/ShippingForm";
import { DESTINATIONS, hexToRgb, isFormDataValid } from "../utils/utils";

const ShippingFormContainer = () => {
  const [formData, setFormData] = useState({
    receiverName: "",
    weight: "",
    boxColor: "#ffffff",
    rgbColor: "rgb(255, 255, 255)",
    destination: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ...(name === "boxColor" && { rgbColor: hexToRgb(value) }),
    }));

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingBox = new ShippingBox(
      formData.receiverName,
      formData.weight,
      formData.boxColor,
      formData.rgbColor,
      formData.destination
    );

    const newErrors = shippingBox.validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Calculate cost and save data directly
    const cost = shippingBox.calculateCost(DESTINATIONS);
    const savedData = JSON.parse(localStorage.getItem("savedBoxes")) || [];
    savedData.push({ ...formData, cost });
    localStorage.setItem("savedBoxes", JSON.stringify(savedData));

    toast.success("Entry saved successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setFormData({
      receiverName: "",
      weight: "",
      boxColor: "#ffffff",
      rgbColor: "rgb(255, 255, 255)",
      destination: "",
    });
    setErrors({});
  };

  const isValidFormData = isFormDataValid(formData);

  return (
    <ShippingForm
      formData={formData}
      errors={errors}
      destinations={DESTINATIONS}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      hexToRgb={hexToRgb}
      isFormDataValid={isValidFormData}
    />
  );
};

export default ShippingFormContainer;
