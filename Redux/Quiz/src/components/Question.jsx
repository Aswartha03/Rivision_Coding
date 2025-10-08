import React from 'react';

const Question = ({ question, selectedAnswer, showAnswer, onAnswerSelect, onSkip, timer, currentIndex, totalQuestions }) => {
  return (
    <div className="question-container">
      <h2>Question {currentIndex + 1} / {totalQuestions}</h2>
      <p>{question.question}</p>
      <div className="options-container">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn 
              ${selectedAnswer === option ? 'selected' : ''} 
              ${showAnswer && option === question.correctAnswer ? 'correct' : ''} 
              ${showAnswer && selectedAnswer === option && option !== question.correctAnswer ? 'wrong' : ''}
            `}
            onClick={() => onAnswerSelect(option)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="footer">
        <p>Time Left: {timer}s</p>
        <button onClick={onSkip} disabled={showAnswer}>Skip</button>
      </div>
    </div>
  );
};

export default Question;
