import React from "react";

const Terminal = ({ logs }) => {
  return (
    <div style={{ backgroundColor: "#000", color: "#0f0", padding: "10px", fontFamily: "monospace", height: "150px", overflowY: "auto" }}>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
};

export default Terminal;
