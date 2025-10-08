import React from 'react';

const HistoryList = ({ history, longestTimeQuestionId }) => {
  return (
    <div className="history-list">
      {history.map((item, idx) => (
        <div 
          key={idx} 
          className={`history-item ${item.id === longestTimeQuestionId ? 'highlight' : ''}`}
        >
          <p><strong>Q:</strong> {item.question}</p>
          <p><strong>Your Answer:</strong> {item.selectedAnswer || 'Skipped'}</p>
          <p><strong>Result:</strong> {item.result}</p>
          <p><strong>Time:</strong> {item.timeTaken}s</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
