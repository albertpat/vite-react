// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"; 
import "./App.css";
import FilmsList from "./filmsList";

function App() {
  const [list, setList] = useState(["Ready", "set", "Go"]);
  const [text, setText] = useState(""); 

  function onSubmit(event) {
    event.preventDefault();
    if (text.trim() !== "") { 
      const newArr = [...list, text.trim()];
      setList(newArr);
      setText("");
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, index) => {
          return <li key={item + index}>{item}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;