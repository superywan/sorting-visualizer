import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);
  const [max, setMax] = useState(100);

  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [comparingElementIndex, setComparingElementIndex] = useState(-1);

  useEffect(() => {
    handleClick();
  }, []);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const generateRandomNumber = () => {
    const setting = { max: 1000, min: 1 };
    return Math.random() * (setting.max - setting.min) + setting.min;
  };

  const performBubbleSort = async (e) => {
    console.log("Start Sorting!");

    const clonedElements = [...elements];
    for (let i = 0; i < clonedElements.length; i++) {
      for (let j = 0; j < clonedElements.length; j++) {
        setComparingElementIndex(j + 1);
        await timer(1 / i);
        if (clonedElements[j] > clonedElements[j + 1]) {
          setCurrentElementIndex(j);
          let temp = clonedElements[j];
          clonedElements[j] = clonedElements[j + 1];
          clonedElements[j + 1] = temp;
          setCurrentElementIndex(j + 1);
        }
        setElements(clonedElements);
      }
    }
    setCurrentElementIndex(-1);

    console.log("Finished Sorting!");
  };

  const handleClick = (e) => {
    const newElements = [];

    for (let i = 0; i < max; i++) {
      newElements.push(Math.floor(generateRandomNumber()));
    }
    setCurrentElementIndex(0);
    setElements(newElements);
  };

  return (
    <div className="App">
      <button onClick={(e) => handleClick(e)}>Generate</button>
      <button onClick={(e) => performBubbleSort(e)}>Perform Bubble Sort</button>
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
                backgroundColor:
                  index === currentElementIndex
                    ? "red"
                    : comparingElementIndex === index
                    ? "tomato"
                    : currentElementIndex === -1
                    ? "green"
                    : "gray",
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
