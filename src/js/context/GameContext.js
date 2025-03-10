import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    name: 'Player',
    level: 1,
    xp: 0,
    achievements: [],
    completedLevels: []
  });
  
  const [gameState, setGameState] = useState({
    currentLevel: 1,
    difficulty: 'normal',
    score: 0,
    hintsUsed: 0
  });
  
  const [gameProgress, setGameProgress] = useState({
    unlockedLevels: [1],
    unlockedChapters: ['limits']
  });
  
  // Progress tracking functions
  const completeLevel = (levelId) => {
    setPlayer(prev => ({
      ...prev,
      completedLevels: [...prev.completedLevels, levelId],
      xp: prev.xp + 100
    }));
    
    // Unlock next level logic
    if (levelId % 5 === 0) {
      // Unlock next chapter after every 5 levels
      const chapters = ['limits', 'derivatives', 'integrals', 'applications'];
      const currentChapterIndex = chapters.indexOf(gameProgress.unlockedChapters[gameProgress.unlockedChapters.length - 1]);
      if (currentChapterIndex < chapters.length - 1) {
        setGameProgress(prev => ({
          ...prev,
          unlockedChapters: [...prev.unlockedChapters, chapters[currentChapterIndex + 1]]
        }));
      }
    }
    
    setGameProgress(prev => ({
      ...prev,
      unlockedLevels: [...prev.unlockedLevels, levelId + 1]
    }));
  };
  
  const updateScore = (points) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + points
    }));
  };
  
  const useHint = () => {
    setGameState(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1
    }));
  };
  
  const changeLevel = (levelId) => {
    setGameState(prev => ({
      ...prev,
      currentLevel: levelId
    }));
  };
  
  const changeDifficulty = (difficultyLevel) => {
    setGameState(prev => ({
      ...prev,
      difficulty: difficultyLevel
    }));
  };
  
  return (
    <GameContext.Provider value={{
      player,
      gameState,
      gameProgress,
      completeLevel,
      updateScore,
      useHint,
      changeLevel,
      changeDifficulty
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
