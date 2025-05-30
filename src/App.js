import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setSubmittedName(name.trim());
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      {!submittedName ? (
        <form onSubmit={handleSubmit}>
          <h2>Enter your name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name here"
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <h1>Welcome, {submittedName}!</h1>
          <div style={{ marginTop: "30px" }}>
            <video
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              autoPlay
              muted
              loop
              style={{ maxWidth: "80%", borderRadius: "10px" }}
            ></video>
          </div>
          <h3 style={{ marginTop: "10px", color: "#333" }}>Beloved Team</h3>
        </>
      )}
    </div>
  );
};

export default App;
