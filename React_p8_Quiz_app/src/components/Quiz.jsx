import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAns) => [...prevUserAns, selectedAnswer]);
  }
  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='quiz-complete' />
        <h2>quiz completed!</h2>
      </div>
    );
  }
  //   suffled answer
  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={10000}
          //   when the timer is expired the handleSelectAnswer function will be executed but no answer will be registerd as the timer is expired.
          onTimeout={() => handleSelectAnswer(null)}
        ></QuestionTimer>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {suffledAnswers.map((answer) => {
            return (
              <li className='answer' key={answer}>
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
