import React from 'react';

const GameMenu = ({ onNavigate, currentScreen }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'play', label: 'Play' },
    { id: 'learn', label: 'Learn' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="game-menu">
      {menuItems.map(item => (
        <button
          key={item.id}
          className={`btn ${currentScreen === item.id ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default GameMenu;
