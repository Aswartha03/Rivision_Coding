import React from 'react';

const ProgressBar = ({ currentIndex, totalQuestions }) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
