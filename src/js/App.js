import React, { useState } from 'react';
import GameHeader from './components/GameHeader';
import GameMenu from './components/GameMenu';
import GameContent from './components/GameContent';
import LevelSelector from './components/LevelSelector';
import { GameProvider } from './context/GameContext';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  
  return (
    <GameProvider>
      <div className="game-container">
        <GameHeader />
        <GameMenu onNavigate={setCurrentScreen} currentScreen={currentScreen} />
        <div className="game-content">
          <LevelSelector />
          <GameContent currentScreen={currentScreen} />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
