import React, { useState, useEffect } from "react";
import { useGameContext } from '../context/GameContext';

const GameUI = () => {
  const [points, setPoints] = useState(0);
  const { gameState } = useGameContext();
  
  // Determine the correct path to Unity build based on environment
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/mathquest-adventures' 
    : '';
  const unityPath = `${basePath}/unityBuild/index.html`;
  
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
          src={unityPath}
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
