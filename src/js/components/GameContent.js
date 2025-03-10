import React from 'react';
import { useGameContext } from '../context/GameContext';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import LearnScreen from '../screens/LearnScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const GameContent = ({ currentScreen }) => {
  const { gameState } = useGameContext();
  
  // Render the appropriate screen based on currentScreen value
  const renderScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'play':
        return <PlayScreen levelId={gameState.currentLevel} />;
      case 'learn':
        return <LearnScreen />;
      case 'achievements':
        return <AchievementsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };
  
  return (
    <div className="game-main">
      {renderScreen()}
    </div>
  );
};

export default GameContent;
