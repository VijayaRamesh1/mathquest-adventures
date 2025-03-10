import React from 'react';
import { useGameContext } from '../context/GameContext';

const LevelSelector = () => {
  const { gameProgress, gameState, changeLevel } = useGameContext();
  
  // Define our chapters and their levels
  const chapters = [
    {
      id: 'limits',
      title: 'The Kingdom of Limits',
      levels: [1, 2, 3, 4, 5]
    },
    {
      id: 'derivatives',
      title: 'The Derivative Forest',
      levels: [6, 7, 8, 9, 10]
    },
    {
      id: 'integrals',
      title: 'The Integral Mountains',
      levels: [11, 12, 13, 14, 15]
    },
    {
      id: 'applications',
      title: 'The Applications Valley',
      levels: [16, 17, 18, 19, 20]
    }
  ];
  
  const handleLevelClick = (levelId) => {
    if (gameProgress.unlockedLevels.includes(levelId)) {
      changeLevel(levelId);
    }
  };
  
  return (
    <div className="game-sidebar">
      <h2>Game Progress</h2>
      {chapters.map(chapter => {
        // Check if this chapter is unlocked
        const isChapterUnlocked = gameProgress.unlockedChapters.includes(chapter.id);
        
        if (!isChapterUnlocked) {
          return null; // Don't show locked chapters
        }
        
        return (
          <div key={chapter.id} className="chapter-section">
            <h3>{chapter.title}</h3>
            <div className="level-grid">
              {chapter.levels.map(levelId => {
                const isLevelUnlocked = gameProgress.unlockedLevels.includes(levelId);
                const isCurrentLevel = gameState.currentLevel === levelId;
                const isCompleted = gameProgress.unlockedLevels.includes(levelId + 1) && levelId !== gameState.currentLevel;
                
                return (
                  <button
                    key={levelId}
                    className={`level-button ${isCurrentLevel ? 'current-level' : ''} ${isCompleted ? 'completed-level' : ''} ${!isLevelUnlocked ? 'locked-level' : ''}`}
                    onClick={() => handleLevelClick(levelId)}
                    disabled={!isLevelUnlocked}
                  >
                    {levelId}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LevelSelector;
