import React from "react";
import { useState } from "react";
import Button from "./Button";
import Emoji from "./Emoji";
import Card from "./Card";
import Message from "./Message";

import "./app.css";
import { petsArray } from "../pets.js";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [index, setIndex] = useState(0);
  const [pets] = useState(petsArray);
  const [enable, setEnable] = useState(true);
  const [message, setMessage] = useState('');


  const addLikes = () => {
    if(!enable)
      return;
    setLikes(likes + 1);
    displayNext();
  };

  const addDislikes = () => {
    if(!enable)
      return;
    setDislikes(dislikes + 1);
    displayNext();
  };

  const displayNext = () => {
    if (index === pets.length - 1) {
      setEnable(false);
      getMessage();
    } else setIndex(index + 1);
  };

  const getMessage = () => {
    if (likes === dislikes) {
      setMessage("Get a dog or a cat!");
    } else if (likes > dislikes) {
      setMessage("Go open a zoo!");
    } else {
      setMessage("Don't get a pet!");
    }
  };

  return (
    <div className="app">
      <div className="header-container">
        <Emoji count={likes} icon={"👍"} />
        <Emoji count={dislikes} icon={"👎"} />
      </div>
      <Card pet={pets[index]} cls={!enable}/>
      <Message msg={message} cls={enable} />
      <div className="btns-container">
        <Button
          handleClick={addLikes}
          cls="green"
          icon={"✔️"}
        />
        <Button
          handleClick={addDislikes}
          cls="red"
          icon={"❌"}
        />
      </div>
    </div>
  );
};

export default App;
