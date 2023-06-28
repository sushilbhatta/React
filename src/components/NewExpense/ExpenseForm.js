import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("hi");
    setEnteredAmount('');
    setEnteredDate("");
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //the value attribute must be used to do two way binfing.ie clearing form after submit.
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2026-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
//          alternative of using multiple state to single state.
//   const [userInput, setUserInput] = useState({
//     enterdTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
// setUserInput({
//   ...userInput,
//   enterdTitle: event.target.value,
// });
// directly calling older state and overriding the key of an object is not good practice as in cade of lots of old state  handling react may get confuse and triger wrong older state.
// insted of upper approach in one state management ,use function to ensure that the previous state is preserved.
//     setUserInput((pervState) => {
//       return { ...pervState, enterdTitle: event.target.value };
//     });
// setUserInput({
//   ...userInput,
//   enteredAmount: event.target.value,
// });

// setUserInput({
//   ...userInput,
//   enteredDate: event.target.value,
// });
