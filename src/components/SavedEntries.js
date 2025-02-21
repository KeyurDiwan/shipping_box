function SavedEntries() {
  const savedBoxes = JSON.parse(localStorage.getItem("savedBoxes")) || [];

  return (
    <div className="saved-entries">
      <h2>Saved Shipping Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Receiver Name</th>
            <th>Weight (kg)</th>
            <th>Box Color</th>
            <th>Destination</th>
            <th>Total Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {savedBoxes.map((box, index) => (
            <tr key={index}>
              <td>{box.receiverName}</td>
              <td>{box.weight}</td>
              <td>
                <div
                  style={{
                    backgroundColor: box.rgbColor,
                    width: "20px",
                    height: "20px",
                    margin: "0 auto",
                    border: "1px solid #ddd",
                  }}
                />
              </td>
              <td>{box.destination}</td>
              <td>{box.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavedEntries;
