import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    console.log(isNaN(newValue));
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <main>
      <Header userInput={userInput} onChange={handleChange} />
      <Results input={userInput}></Results>
    </main>
  );
}

export default App;
