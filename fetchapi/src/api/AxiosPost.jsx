import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title:title,
                body:body,
            });
            setResponse(res.data);
        } catch (err) {
            setError(err.message);
            setResponse({ error: err.message });
        } finally {
            setLoading(false);
        }
    };
    return (

    <div style={{ padding: "20px" }}>
      <h2>Axios POST Example (Dummy API)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />
        <button type="submit">Send POST Request</button>
      </form>

      <h3>Response:</h3>
      <pre>{response && JSON.stringify(response, null, 2)}</pre>
    </div>
  );
    
    
}