import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState([{ id: 1, title: "react를 배워봅시다" }]);
  const [title, setTitle] = useState("");
  const addInput = (event) => {
    setTitle(event.target.value);
  };
  const addList = () => {
    const addTodo = {
      id: input.length + 1,
      title: title,
    };
    setInput([...input, addTodo]);
  };
  return (
    <div className="wrap">
      <input value={title} onChange={addInput} />
      <button onClick={addList}>추가하기</button>
      <h1>Todo List</h1>
      <div className="boxList">
        {input.map((item) => {
          return (
            <div key={item.id} className="box">
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
