import React from "react";

import "./app.css";

const Emoji = ({ count, icon }) => {
  return (
    <div className="emoji-container">
      <span>{count}</span>
      <span className="icon">{icon}</span>
    </div>
  );
};

export default Emoji;
