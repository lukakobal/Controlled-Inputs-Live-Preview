import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // state za vnosna polja
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className="container">
      <h1>Profile Preview 👤</h1>

      {/* FORM SECTION */}
      <div className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            value={age}
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Bio:
          <textarea
            value={bio}
            placeholder="Write something about yourself..."
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
      </div>

      {/* LIVE PREVIEW */}
      <div className="preview">
        <h2>Live Preview</h2>
        <div className="card">
          <p>
            <strong>Name:</strong> {name || "—"}
          </p>
          <p>
            <strong>Age:</strong> {age || "—"}
          </p>
          <p>
            <strong>Bio:</strong> {bio || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
