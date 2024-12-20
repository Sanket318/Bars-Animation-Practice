import React, { useState, useEffect } from "react";
// import "./App.css";
import "./Bars.css";

export default function Bars() {
    const [heights, setHeights] = useState([300, 300, 300, 300, 300]);
    const [isAnimating, setIsAnimating] = useState(false);
    let animationInterval;
  
    useEffect(() => {
      if (isAnimating) {
        //eslint-disable-next-line
        animationInterval = setInterval(() => {
          const newHeights = Array(5).fill(0).map(() => Math.floor(Math.random() * 250) + 50);
          setHeights(newHeights);
        }, 500);
      } else {
        clearInterval(animationInterval);
      }
  
      return () => clearInterval(animationInterval);
    }, [isAnimating]);
  
    const handleStart = () => setIsAnimating(true);
  
    const handleStop = () => setIsAnimating(false);
  
    const handleReset = () => {
      setIsAnimating(false);
      setHeights([300, 300, 300, 300, 300]);
    };
  
    return (
      <div style={{ textAlign: "center", marginLeft:"1000px" }}>
        <div id="animation-container" >
          {heights.map((height, index) => (
            <div
              key={index}
              className="bar"
              style={{
                height: `${height}px`,
                backgroundColor: getColor(index),
              }}
            ></div>
          ))}
        </div>
        <div id="controls" >
          <button id="start" onClick={handleStart}>Start</button>
          <button id="reset" onClick={handleReset}>Reset</button>
          <button id="stop" onClick={handleStop}>Stop</button>
        </div>
      </div>
    );
  };
  
  const getColor = (index) => {
    const colors = ["#6a5acd", "#ff69b4", "#ff0062", "#ff8c00", "#ffd700"];
    return colors[index];
  };

