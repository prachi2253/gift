import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";

function User() {
  const location = useLocation();
  const password = location.state?.password; // get password from navigation

  if (!password) {
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "50vh" }}>
        Unauthorized access
      </p>
    );
  }

  // Direct Cloudinary URLs
   const mediaFiles = [
    { name: "sleepyhead", url: process.env.REACT_APP_SLEEPYHEAD },
    { name: "jakaas", url: process.env.REACT_APP_JAKAAS },
    { name: "pookie", url: process.env.REACT_APP_POOKIE },
    { name: "nasha", url: process.env.REACT_APP_NASHA },
  ];

  function NetflixCurvedText() {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <svg width="400" height="200" viewBox="0 0 400 100">
          <path id="curve" d="M20,80 Q200,0 380,80" fill="transparent" />
          <text fill="#e50914" fontSize="77" fontWeight="bold">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              BRAINROT
            </textPath>
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#141414",
        minHeight: "100vh",
        color: "#fff",
        paddingTop: "5rem",
      }}
    >
      <NetflixCurvedText />
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "3rem",
          position: "relative",
          top: "-50px",
        }}
      >
        Who's watching?
      </h1>
      <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        {mediaFiles.map((file, idx) => (
          <Card key={idx} image={file.url} name={file.name} password={password} />
        ))}
      </div>
    </div>
  );
}

export default User;
