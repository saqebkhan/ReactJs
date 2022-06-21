import React from "react";
import { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState(null);
  const [items, setItems] = useState([]);

  const item = (event) => {
    setInput(event.target.value);
  };
  const listOfItems = () => {
    if (input.trim() !== "") {
      setItems([...items, { task: input, id: Math.random().toString() }]);
    }
    setInput("");
  };
  const del = (item) => {
    let newArr = items.filter((ele) => ele.id !== item.id);
    setItems(newArr);
    localStorage.setItem("itemTask", item.task);
  };
  const undo = () => {
    if(localStorage.getItem("itemTask")){
    let newItem = localStorage.getItem("itemTask");
    setItems([...items, { task: newItem, id: Math.random().toString()}]);
    }
    localStorage.removeItem("itemTask");
  };
  return (
    <div>
      <button onClick={undo}>Undo</button>
      <input
        type="text"
        placeholder="Add To Do"
        onChange={item}
        value={input}
      />
      <button onClick={listOfItems}>Add</button>
      <ol>
        {items.map((ele) => {
          return <li onClick={() => del(ele)}>{ele.task}</li>;
        })}
      </ol>
    </div>
  );
};
