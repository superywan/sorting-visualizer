import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);
  // const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const generateRandomNumber = () => {
    const setting = { max: 1000, min: 1 };
    return Math.random() * (setting.max - setting.min) + setting.min;
  };

  const handleClick = () => {
    const newElements = [];

    for (let i = 0; i < max; i++) {
      newElements.push(Math.floor(generateRandomNumber()));
    }

    setElements(newElements);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Generate</button>
      {/* <input type="text" value={min} onChange={(e) => setMin(e.target.value)} /> */}
      <input type="text" value={max} onChange={(e) => setMax(e.target.value)} />
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        {elements.map((element, index) => {
          return (
            <div
              key={index}
              style={{
                width: "30px",
                height: `${element}px`,
                backgroundColor: "tomato",
                border: "1px solid white",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
