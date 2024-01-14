import React from "react";
import { useState } from "react";
import '../pages/rafay.css'

const Rafay = () => {
    const [counter, setcounter] = useState(0)
    return (
    <div className="rafay">
      <button onClick={() => setcounter ((prevcounter)=> prevcounter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setcounter ((prevcounter)=> prevcounter+1)}>+</button>
      <button onClick={() => setcounter(0)}>RESET</button>
    </div>
  );
};

export default Rafay;
