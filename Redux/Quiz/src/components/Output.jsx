import React from 'react';
import HistoryList from './History';


const Summary = ({ score, correct, wrong, skipped, history, longestTimeQuestionId, onRestart }) => {
  return (
    <div className="summary">
      <h2>Quiz Summary</h2>
      <p>Total Score: {score}</p>
      <p>Correct: {correct}, Wrong: {wrong}, Skipped: {skipped}</p>
      <HistoryList history={history} longestTimeQuestionId={longestTimeQuestionId} />
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Summary;
