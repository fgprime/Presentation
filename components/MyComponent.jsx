"use client";

import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };

  const btnStyle = {
    backgroundColor: "#04AA6D",
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <div style={{padding: '12px'}}>
      <h1>MyComponent</h1>
      <p>Count: {count}</p>
      <button style={btnStyle} onClick={handelClick}>
        Click me
      </button>
    </div>
  );
}
