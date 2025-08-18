import React, { useState } from "react";
import axios from "axios";

function AxiosUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setResult("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(`Upload success! URL: ${res.data.location}`);
    } catch (err) {
      setResult(`Upload failed: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Test File Upload to Dummy API</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{result}</p>
    </div>
  );
}

export default AxiosUpload;
