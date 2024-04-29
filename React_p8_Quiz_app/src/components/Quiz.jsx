import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  //   index of the active question clicked
  //   const activeQuestionIndex =
  //     answerState === "" ? userAnswer.length : userAnswer.length - 1; //activeQuestionState will remain same even if clicked when the state is set.
  // when the ans is clicked the state will be mset but the active question inddex will not increase .
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    //update the useranswer when clicked
    setUserAnswer((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='quiz-complete' />
        <h2>quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
