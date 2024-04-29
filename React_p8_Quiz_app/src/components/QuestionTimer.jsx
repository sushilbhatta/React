import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(() => {
      //  function that will be executed once the time is expired.
      onTimeout();
    }, timeout);
    clearTimeout(timer);
  }, [timeout, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      // function that will be executed in the interval
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id='question-time' max={timeout} value={remainingTime}></progress>
  );
}
