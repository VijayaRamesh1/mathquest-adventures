import React, { useState, useEffect } from 'react';
import { useGameContext } from '../context/GameContext';
import levels from '../data/levels';
import MathVisualizer from '../components/visualizers/MathVisualizer';

const PlayScreen = ({ levelId }) => {
  const { updateScore, completeLevel, useHint, gameState } = useGameContext();
  const [currentLevel, setCurrentLevel] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showHints, setShowHints] = useState({});
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [feedback, setFeedback] = useState('');
  
  // Load the level data when levelId changes
  useEffect(() => {
    if (levels[levelId]) {
      setCurrentLevel(levels[levelId]);
      setSelectedAnswers({});
      setShowHints({});
      setIsLevelComplete(false);
      setFeedback('');
    }
  }, [levelId]);
  
  if (!currentLevel) {
    return <div>Loading level...</div>;
  }
  
  const handleAnswerSelect = (challengeId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [challengeId]: answer
    });
  };
  
  const handleShowHint = (challengeId) => {
    useHint();
    setShowHints({
      ...showHints,
      [challengeId]: true
    });
  };
  
  const handleSubmit = () => {
    // Check if all questions have been answered
    const allChallenges = currentLevel.challenges || [];
    const answeredAll = allChallenges.every(challenge => selectedAnswers[challenge.id]);
    
    if (!answeredAll) {
      setFeedback('Please answer all questions before submitting.');
      return;
    }
    
    // Check if all answers are correct
    const allCorrect = allChallenges.every(
      challenge => selectedAnswers[challenge.id] === challenge.correctAnswer
    );
    
    if (allCorrect) {
      // Calculate score based on challenges completed and hints used
      const baseScore = allChallenges.length * 100;
      const hintPenalty = Object.keys(showHints).length * 25;
      const earnedScore = baseScore - hintPenalty;
      
      updateScore(earnedScore);
      completeLevel(currentLevel.id);
      setIsLevelComplete(true);
      setFeedback(`Congratulations! You've completed this level and earned ${earnedScore} points!`);
    } else {
      setFeedback('Some answers are incorrect. Please try again.');
    }
  };
  
  return (
    <div className="play-screen">
      <div className="level-header">
        <h1>{currentLevel.title}</h1>
        <p className="level-chapter">Chapter: {currentLevel.chapter}</p>
      </div>
      
      <div className="level-description">
        <p>{currentLevel.description}</p>
        <h3>Objectives</h3>
        <ul>
          {currentLevel.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
      
      <div className="level-theory" dangerouslySetInnerHTML={{ __html: currentLevel.theory }} />
      
      {currentLevel.visualization && (
        <div className="level-visualization">
          <h3>Interactive Visualization</h3>
          <MathVisualizer visualization={currentLevel.visualization} />
        </div>
      )}
      
      <div className="level-challenges">
        <h3>Challenges</h3>
        {currentLevel.challenges.map(challenge => (
          <div key={challenge.id} className="challenge">
            <div className="challenge-question" dangerouslySetInnerHTML={{ __html: challenge.question }} />
            
            <div className="challenge-options">
              {challenge.options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`${challenge.id}-option-${index}`}
                    name={challenge.id}
                    value={option}
                    checked={selectedAnswers[challenge.id] === option}
                    onChange={() => handleAnswerSelect(challenge.id, option)}
                    disabled={isLevelComplete}
                  />
                  <label htmlFor={`${challenge.id}-option-${index}`}>{option}</label>
                </div>
              ))}
            </div>
            
            {!showHints[challenge.id] && !isLevelComplete && (
              <button className="hint-button" onClick={() => handleShowHint(challenge.id)}>
                Show Hint (-25 points)
              </button>
            )}
            
            {showHints[challenge.id] && (
              <div className="hint">
                <strong>Hint:</strong> {challenge.hint}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {feedback && (
        <div className={`feedback ${isLevelComplete ? 'success' : 'error'}`}>
          {feedback}
        </div>
      )}
      
      {!isLevelComplete && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Answers
        </button>
      )}
      
      {isLevelComplete && (
        <div className="level-completion">
          <p>You've unlocked the next level!</p>
          <button className="next-level-button">
            Continue to Next Level
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayScreen;
