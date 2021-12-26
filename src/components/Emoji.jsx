import React from "react";

import "./app.css";

const Emoji = ({ count, icon, cls }) => {
  return (
    <div className={`emoji-container ${cls}`}>
      <span className="count">{count}</span>
      <span className="icon">{icon}</span>
    </div>
  );
};

export default Emoji;
