const DESTINATIONS = {
  Sweden: { rate: 7.35, currency: "INR" },
  China: { rate: 11.53, currency: "INR" },
  Brazil: { rate: 15.63, currency: "INR" },
  Australia: { rate: 50.09, currency: "INR" },
};

// converting hex color to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

const isFormDataValid = (formData) => {
  return (
    formData.destination &&
    formData.weight &&
    formData.weight > 0 &&
    formData.receiverName
  );
};

export { DESTINATIONS, hexToRgb, isFormDataValid };
