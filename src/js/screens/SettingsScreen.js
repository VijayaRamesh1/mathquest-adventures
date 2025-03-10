import React, { useState } from 'react';
import { useGameContext } from '../context/GameContext';

const SettingsScreen = () => {
  const { gameState, changeDifficulty, player } = useGameContext();
  const [playerName, setPlayerName] = useState(player.name);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  
  const handleDifficultyChange = (difficulty) => {
    changeDifficulty(difficulty);
  };
  
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };
  
  const handleSaveSettings = () => {
    // In a real app, we would persist these settings
    // For now, we'll just show a save confirmation message
    setShowSaveMessage(true);
    setTimeout(() => {
      setShowSaveMessage(false);
    }, 3000);
  };
  
  return (
    <div className="settings-screen">
      <h1>Game Settings</h1>
      
      <div className="settings-section">
        <h2>Player Settings</h2>
        
        <div className="setting">
          <label htmlFor="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={handleNameChange}
            maxLength={20}
          />
        </div>
      </div>
      
      <div className="settings-section">
        <h2>Game Difficulty</h2>
        
        <div className="difficulty-options">
          <button
            className={`difficulty-btn ${gameState.difficulty === 'easy' ? 'active' : ''}`}
            onClick={() => handleDifficultyChange('easy')}
          >
            Easy
          </button>
          <button
            className={`difficulty-btn ${gameState.difficulty === 'normal' ? 'active' : ''}`}
            onClick={() => handleDifficultyChange('normal')}
          >
            Normal
          </button>
          <button
            className={`difficulty-btn ${gameState.difficulty === 'hard' ? 'active' : ''}`}
            onClick={() => handleDifficultyChange('hard')}
          >
            Hard
          </button>
        </div>
        
        <div className="difficulty-description">
          {gameState.difficulty === 'easy' && (
            <p>Easy mode provides more hints and simpler challenges. Great for beginners or younger students.</p>
          )}
          {gameState.difficulty === 'normal' && (
            <p>Normal mode balances challenge and accessibility. Recommended for most high school students.</p>
          )}
          {gameState.difficulty === 'hard' && (
            <p>Hard mode features complex problems and fewer hints. Perfect for advanced students or those seeking a challenge.</p>
          )}
        </div>
      </div>
      
      <div className="settings-section">
        <h2>Audio Settings</h2>
        
        <div className="setting">
          <label htmlFor="musicVolume">Music Volume:</label>
          <input type="range" id="musicVolume" min="0" max="100" defaultValue="70" />
        </div>
        
        <div className="setting">
          <label htmlFor="sfxVolume">Sound Effects Volume:</label>
          <input type="range" id="sfxVolume" min="0" max="100" defaultValue="80" />
        </div>
        
        <div className="setting checkbox">
          <input type="checkbox" id="muteAll" />
          <label htmlFor="muteAll">Mute All Sound</label>
        </div>
      </div>
      
      <div className="settings-section">
        <h2>Visual Settings</h2>
        
        <div className="setting checkbox">
          <input type="checkbox" id="highContrast" />
          <label htmlFor="highContrast">High Contrast Mode</label>
        </div>
        
        <div className="setting checkbox">
          <input type="checkbox" id="largeText" />
          <label htmlFor="largeText">Large Text</label>
        </div>
        
        <div className="setting checkbox">
          <input type="checkbox" id="reducedAnimations" />
          <label htmlFor="reducedAnimations">Reduced Animations</label>
        </div>
      </div>
      
      <div className="settings-section">
        <h2>Game Data</h2>
        
        <div className="data-actions">
          <button className="btn btn-secondary">Export Progress</button>
          <button className="btn btn-secondary">Import Progress</button>
          <button className="btn btn-danger">Reset Progress</button>
        </div>
      </div>
      
      <div className="settings-actions">
        <button className="btn btn-primary" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>
      
      {showSaveMessage && (
        <div className="save-message success">
          Settings saved successfully!
        </div>
      )}
    </div>
  );
};

export default SettingsScreen;
