import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleOnChange() {
    setText(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(text);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleOnChange}
          value={text}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
