import React from 'react';
import { useGameContext } from '../context/GameContext';

const HomeScreen = () => {
  const { player } = useGameContext();
  
  return (
    <div className="home-screen">
      <h1>Welcome to MathQuest: Adventures in Calculus!</h1>
      
      <div className="welcome-banner">
        <div className="player-welcome">
          <h2>Welcome back, {player.name}!</h2>
          <p>Continue your mathematical adventure and unlock new challenges.</p>
        </div>
        <div className="player-progress">
          <h3>Your Progress</h3>
          <p>Level: {player.level}</p>
          <p>XP: {player.xp}</p>
          <p>Completed Levels: {player.completedLevels.length}</p>
        </div>
      </div>
      
      <div className="game-description">
        <h2>Embark on a Mathematical Adventure</h2>
        <p>
          In MathQuest, you'll journey through a world where calculus isn't just a subject - it's the key to unlocking
          new realms and overcoming challenges. Explore exciting environments, solve puzzles, and master mathematical concepts
          through interactive gameplay.
        </p>
        
        <div className="feature-highlights">
          <div className="feature">
            <h3>Interactive Puzzles</h3>
            <p>Solve engaging puzzles that make calculus concepts tangible and fun.</p>
          </div>
          <div className="feature">
            <h3>Adaptive Learning</h3>
            <p>The game adapts to your skill level, providing the right challenge at the right time.</p>
          </div>
          <div className="feature">
            <h3>Story-Driven Experience</h3>
            <p>Follow an exciting narrative that integrates mathematical concepts into an adventure.</p>
          </div>
        </div>
      </div>
      
      <div className="get-started">
        <h2>Ready to Play?</h2>
        <p>Click the Play button in the menu to continue your journey or start a new adventure!</p>
      </div>
    </div>
  );
};

export default HomeScreen;
