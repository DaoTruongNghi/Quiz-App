import { useState, useCallback, useRef } from "react";
import Question from "./Question.jsx";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // User array state

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswers = useCallback(function handleSelectAnswers(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswers(null);
  }, [handleSelectAnswers]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswers}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
