import React, { useState } from 'react';
import { useGameContext } from '../context/GameContext';

const SettingsScreen = () => {
  const { gameState, changeDifficulty, player } = useGameContext();
  const [playerName, setPlayerName] = useState(player.name);
  const [formChanged, setFormChanged] = useState(false);
  
  const difficultyOptions = [
    { id: 'easy', label: 'Easy', description: 'More hints available, simpler problems' },
    { id: 'normal', label: 'Normal', description: 'Balanced difficulty for high school students' },
    { id: 'hard', label: 'Hard', description: 'Fewer hints, more complex problems' }
  ];
  
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
    setFormChanged(true);
  };
  
  const handleDifficultyChange = (difficulty) => {
    changeDifficulty(difficulty);
    setFormChanged(true);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update player name in state
    // For demo purposes, we're just confirming changes
    alert('Settings updated successfully!');
    setFormChanged(false);
  };
  
  return (
    <div className="settings-screen">
      <h1>Game Settings</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="settings-section">
          <h2>Profile Settings</h2>
          
          <div className="form-group">
            <label htmlFor="player-name">Player Name</label>
            <input
              type="text"
              id="player-name"
              value={playerName}
              onChange={handleNameChange}
              className="form-control"
            />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Game Difficulty</h2>
          <p>Adjust the difficulty of puzzles and challenges.</p>
          
          <div className="difficulty-options">
            {difficultyOptions.map(option => (
              <div 
                key={option.id}
                className={`difficulty-option ${gameState.difficulty === option.id ? 'selected' : ''}`}
                onClick={() => handleDifficultyChange(option.id)}
              >
                <h3>{option.label}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Audio Settings</h2>
          
          <div className="form-group">
            <label htmlFor="music-volume">Music Volume</label>
            <input
              type="range"
              id="music-volume"
              min="0"
              max="100"
              defaultValue="70"
              className="form-control"
              onChange={() => setFormChanged(true)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="effects-volume">Sound Effects</label>
            <input
              type="range"
              id="effects-volume"
              min="0"
              max="100"
              defaultValue="80"
              className="form-control"
              onChange={() => setFormChanged(true)}
            />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Accessibility</h2>
          
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="high-contrast" 
              onChange={() => setFormChanged(true)}
            />
            <label htmlFor="high-contrast">High Contrast Mode</label>
          </div>
          
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="large-text" 
              onChange={() => setFormChanged(true)}
            />
            <label htmlFor="large-text">Large Text</label>
          </div>
          
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="screen-reader" 
              onChange={() => setFormChanged(true)}
            />
            <label htmlFor="screen-reader">Screen Reader Compatibility</label>
          </div>
        </div>
        
        <div className="settings-actions">
          <button 
            type="submit" 
            className="save-button"
            disabled={!formChanged}
          >
            Save Changes
          </button>
          
          <button 
            type="button" 
            className="reset-button"
            onClick={() => alert('This would reset all game progress in a real application.')}
          >
            Reset Game Progress
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsScreen;
