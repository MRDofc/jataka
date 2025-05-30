import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      {!submitted ? (
        <div>
          <h1>Enter your name</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
          />
          <br />
          <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px" }}>
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {name}!</h1>
          <video width="320" height="240" autoPlay muted loop>
            <source src="https://files.catbox.moe/81jyq0.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Beloved Team</h2>
        </div>
      )}
    </div>
  );
}

export default App;
