import { useState } from "react";
import { RESTAURANT_BULK_UPLOAD_URL } from "../utils/references";
const RestaurantUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${RESTAURANT_BULK_UPLOAD_URL}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Restaurants uploaded successfully!");
      } else {
        alert("Failed to upload restaurants.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div>
      <h2>Upload Restaurants</h2>
      <input type="file" accept=".xlsx,.csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};
export default RestaurantUpload;
