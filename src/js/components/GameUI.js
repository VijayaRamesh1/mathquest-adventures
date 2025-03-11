import React, { useState, useEffect } from "react";
import { useGameContext } from '../context/GameContext';

const GameUI = () => {
  const [points, setPoints] = useState(0);
  const { gameState } = useGameContext();
  
  useEffect(() => {
    // Check for Unity points updates from localStorage
    const intervalId = setInterval(() => {
      const storedPoints = localStorage.getItem("Points");
      if (storedPoints) {
        setPoints(parseInt(storedPoints, 10));
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="game-ui">
      <h1>MathQuest</h1>
      <div className="unity-container">
        <iframe 
          src="/static/unityBuild/index.html" 
          width="800" 
          height="600" 
          title="MathQuest Unity Game"
          allow="fullscreen"
        ></iframe>
      </div>
      <p className="points-display">Points: {points}</p>
      <p>Current Level: {gameState.currentLevel}</p>
    </div>
  );
};

export default GameUI;
