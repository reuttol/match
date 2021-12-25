import React from "react";

import "./app.css";

const Button = ({ handleClick, icon, cls }) => {
  return <button className={cls} onClick={()=> handleClick()}>{icon}</button>;
};

export default Button;
