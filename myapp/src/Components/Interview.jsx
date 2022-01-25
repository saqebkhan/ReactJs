import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Interview = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  useEffect(()=>{
      document.body.style.background = 'green'
  })
  

  return (
    <div style={{background:color,color:color}}>
      <button onClick={() => (count < 1 ? 0 : setCount(count - 1))}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button><hr />
      <button onClick={()=> setColor('red')}>Turn Red</button>
    </div>
  );
};
