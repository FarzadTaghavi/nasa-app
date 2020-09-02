import React, { useState } from "react";

export default function NumberImages(props) {
  const [number, setNumber] = useState();

  function submit(event) {
    event.preventDefault(); //stops page from refreshing
    props.addNumber(number);
    setNumber();
  }

  return (
    <div>
      <p>
        How many images do you want to see?{" "}
        <input
          type="text"
          placeholder="how many..."
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button onClick={submit}>Add</button>
      </p>
    </div>
  );