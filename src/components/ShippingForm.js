import React from "react";

function ShippingForm({
  formData,
  errors,
  destinations,
  handleChange,
  handleSubmit,
  hexToRgb,
  isFormDataValid,
}) {
  return (
    <div className="shipping-form">
      <h2>Calculate Shipping Cost</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="receiverName">Receiver Name:</label>
          <input
            id="receiverName"
            name="receiverName"
            type="text"
            placeholder="Enter receiver name"
            value={formData.receiverName}
            onChange={handleChange}
            className={errors.receiverName ? "error" : ""}
          />
          {errors.receiverName && (
            <span className="error-message">{errors.receiverName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            id="weight"
            name="weight"
            type="number"
            placeholder="Enter weight"
            value={formData.weight}
            onChange={handleChange}
            className={errors.weight ? "error" : ""}
          />
          {errors.weight && (
            <span className="error-message">{errors.weight}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="boxColor">Box Color:</label>
          <div className="color-picker-container">
            <input
              id="boxColor"
              name="boxColor"
              type="color"
              value={formData.boxColor}
              onChange={(e) => {
                const newColor = e.target.value;
                handleChange(e);
                hexToRgb(newColor);
              }}
            />
            <span className="rgb-value">{formData.rgbColor}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination Country:</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className={errors.destination ? "error" : ""}
          >
            <option value="">Select Destination</option>
            {Object.entries(destinations).map(([country, details]) => (
              <option key={country} value={country}>
                {country} ({details.rate} {details.currency}/kg)
              </option>
            ))}
          </select>
          {errors.destination && (
            <span className="error-message">{errors.destination}</span>
          )}
        </div>
        <button type="submit">Save</button>
      </form>
      {isFormDataValid && (
        <div className="cost-preview">
          Estimated Cost:{" "}
          {(formData.weight * destinations[formData.destination]?.rate).toFixed(
            2
          )}{" "}
          INR
        </div>
      )}
    </div>
  );
}

export default ShippingForm;
