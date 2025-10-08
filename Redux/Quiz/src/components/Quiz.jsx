import React, { useState, useEffect } from 'react';

import Question from './Question';
import ProgressBar from './ProgressBar';

import useTimer from '../hooks/useTimer';
import Summary from './Output';
import { questions } from '../question';

const Quiz = () => {
  const totalQuestions = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [longestTimeQuestionId, setLongestTimeQuestionId] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const { timeLeft, resetTimer } = useTimer();

  const handleAnswerSelect = (option) => {
    const isCorrect = option === questions[currentIndex].correctAnswer;
    const timeTaken = Math.round((Date.now() - questionStartTime) / 1000);

    setSelectedAnswer(option);
    setShowAnswer(true);
    setScore(prev => prev + (isCorrect ? 1 : 0));

    setHistory(prev => [
      ...prev,
      {
        id: questions[currentIndex].id,
        question: questions[currentIndex].question,
        selectedAnswer: option,
        result: isCorrect ? 'Correct' : 'Wrong',
        timeTaken
      }
    ]);

    setTimeout(nextQuestion, 2000);
  };

  const handleSkip = () => {
    const timeTaken = Math.round((Date.now() - questionStartTime) / 1000);

    setScore(prev => prev - 1);
    setHistory(prev => [
      ...prev,
      {
        id: questions[currentIndex].id,
        question: questions[currentIndex].question,
        selectedAnswer: null,
        result: 'Skipped',
        timeTaken
      }
    ]);
    nextQuestion();
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    setQuestionStartTime(Date.now());
    resetTimer();
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuizOver(true)
      const longest = history.reduce((max, q) => q.timeTaken > max.timeTaken ? q : max, {timeTaken: 0});
      setLongestTimeQuestionId(longest.id);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setHistory([]);
    setIsQuizOver(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuestionStartTime(Date.now());
    resetTimer();
  };

  if (isQuizOver) {
    const correct = history.filter(q => q.result === 'Correct').length;
    const wrong = history.filter(q => q.result === 'Wrong').length;
    const skipped = history.filter(q => q.result === 'Skipped').length;

    return (
      <Summary
        score={score}
        correct={correct}
        wrong={wrong}
        skipped={skipped}
        history={history}
        longestTimeQuestionId={longestTimeQuestionId}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="quiz">
      <ProgressBar currentIndex={currentIndex} totalQuestions={totalQuestions} />
      <Question
        question={questions[currentIndex]}
        selectedAnswer={selectedAnswer}
        showAnswer={showAnswer}
        onAnswerSelect={handleAnswerSelect}
        onSkip={handleSkip}
        timer={timeLeft}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default Quiz;
