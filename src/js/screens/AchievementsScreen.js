import React from 'react';
import { useGameContext } from '../context/GameContext';

const AchievementsScreen = () => {
  const { player } = useGameContext();
  
  // Define all possible achievements
  const allAchievements = [
    {
      id: 'starter',
      title: 'Math Starter',
      description: 'Complete your first level',
      icon: '🏆',
      condition: player => player.completedLevels.length > 0
    },
    {
      id: 'explorer',
      title: 'Math Explorer',
      description: 'Complete 5 different levels',
      icon: '🧭',
      condition: player => player.completedLevels.length >= 5
    },
    {
      id: 'master_limits',
      title: 'Master of Limits',
      description: 'Complete all levels in the Kingdom of Limits',
      icon: '👑',
      condition: player => {
        const limitLevels = [1, 2, 3, 4, 5];
        return limitLevels.every(level => player.completedLevels.includes(level));
      }
    },
    {
      id: 'master_derivatives',
      title: 'Derivative Expert',
      description: 'Complete all levels in the Derivative Forest',
      icon: '🌲',
      condition: player => {
        const derivativeLevels = [6, 7, 8, 9, 10];
        return derivativeLevels.every(level => player.completedLevels.includes(level));
      }
    },
    {
      id: 'master_integrals',
      title: 'Integration Guru',
      description: 'Complete all levels in the Integral Mountains',
      icon: '⛰️',
      condition: player => {
        const integralLevels = [11, 12, 13, 14, 15];
        return integralLevels.every(level => player.completedLevels.includes(level));
      }
    },
    {
      id: 'math_genius',
      title: 'Math Genius',
      description: 'Score over 5000 points total',
      icon: '🧠',
      condition: player => player.xp >= 5000
    },
    {
      id: 'perfect_score',
      title: 'Perfect Solver',
      description: 'Complete a level without using any hints',
      icon: '✨',
      condition: player => player.completedLevels.length > 0 // This would need more specific tracking in a real app
    },
    {
      id: 'speedy_solver',
      title: 'Speed Mathematician',
      description: 'Complete a level in under 60 seconds',
      icon: '⏱️',
      condition: player => player.completedLevels.length > 0 // This would need more specific tracking in a real app
    },
    {
      id: 'persistent',
      title: 'Mathematical Persistence',
      description: 'Retry the same level 3 times until completion',
      icon: '🔄',
      condition: player => player.completedLevels.length > 0 // This would need more specific tracking in a real app
    },
    {
      id: 'calculator',
      title: 'Human Calculator',
      description: 'Solve 50 mathematical problems correctly',
      icon: '🧮',
      condition: player => player.xp >= 5000 // This is an approximation based on XP
    }
  ];
  
  // Filter achievements based on whether they are achieved or not
  const earnedAchievements = allAchievements.filter(achievement => achievement.condition(player));
  const unlockedAchievements = earnedAchievements.map(achievement => achievement.id);
  
  return (
    <div className="achievements-screen">
      <h1>Your Achievements</h1>
      
      <div className="achievements-stats">
        <div className="stat">
          <h3>Total Achievements</h3>
          <p>{earnedAchievements.length} / {allAchievements.length}</p>
        </div>
        <div className="stat">
          <h3>Completion</h3>
          <p>{Math.round((earnedAchievements.length / allAchievements.length) * 100)}%</p>
        </div>
      </div>
      
      <div className="achievements-grid">
        {allAchievements.map(achievement => {
          const isUnlocked = unlockedAchievements.includes(achievement.id);
          
          return (
            <div 
              key={achievement.id} 
              className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-details">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
              <div className="achievement-status">
                {isUnlocked ? '✓' : '🔒'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsScreen;
