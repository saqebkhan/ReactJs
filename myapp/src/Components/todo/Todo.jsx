import React from "react";
import { useState } from "react";

export const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const item = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add To Do"
        onChange={item}
        value={inputList}
      />
      <button onClick={listOfItems}>Add</button>
      <ol>
        {items.map((itemval) => {
          return <li>{itemval}</li>;
        })}
      </ol>
    </div>
  );
};
