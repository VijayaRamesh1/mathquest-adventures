import React from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from '../context/GameContext';

const MainMenu = () => {
  const navigate = useNavigate();
  const { gameState, resetGameState } = useGameContext();
  
  const handleStartGame = () => {
    navigate("/game");
  };
  
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all game progress?")) {
      resetGameState();
    }
  };
  
  return (
    <div className="main-menu">
      <h1>Welcome to MathQuest: Adventures in Calculus</h1>
      <p>Begin your mathematical journey through interactive puzzles and challenges</p>
      
      <div className="menu-buttons">
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
        
        <button className="learn-button" onClick={() => navigate("/learn")}>
          Learning Materials
        </button>
        
        <button className="achievements-button" onClick={() => navigate("/achievements")}>
          Achievements
          {gameState.unlockedAchievements?.length > 0 && 
            <span className="badge">{gameState.unlockedAchievements.length}</span>
          }
        </button>
        
        <button className="settings-button" onClick={() => navigate("/settings")}>
          Settings
        </button>
        
        <button className="reset-button" onClick={handleResetProgress}>
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
