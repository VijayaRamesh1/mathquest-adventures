import React from 'react';
import { useGameContext } from '../context/GameContext';

const GameHeader = () => {
  const { player, gameState } = useGameContext();

  return (
    <header className="header">
      <div className="game-title">MathQuest: Adventures in Calculus</div>
      <div className="player-stats">
        <div className="player-level">Level: {player.level}</div>
        <div className="player-xp">XP: {player.xp}</div>
        <div className="player-score">Score: {gameState.score}</div>
      </div>
    </header>
  );
};

export default GameHeader;
