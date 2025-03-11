import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GameHeader from './components/GameHeader';
import GameUI from './components/GameUI';
import MainMenu from './components/MainMenu';
import GameContent from './components/GameContent';
import LevelSelector from './components/LevelSelector';
import { GameProvider } from './context/GameContext';
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import SettingsScreen from './screens/SettingsScreen';

function App() {
  const basePath = process.env.NODE_ENV === 'production' ? '/mathquest-adventures' : '';
  
  return (
    <GameProvider>
      <Router basename={basePath}>
        <div className="game-container">
          <GameHeader />
          
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<GameUI />} />
            <Route path="/play" element={
              <div className="game-content">
                <LevelSelector />
                <GameContent currentScreen="play" />
              </div>
            } />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/learn" element={<LearnScreen />} />
            <Route path="/achievements" element={<AchievementsScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
