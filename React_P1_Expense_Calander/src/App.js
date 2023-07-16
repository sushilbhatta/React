import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
const App = () => {
  //state for rending list
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES)
  //handling props child to parent
  const expenseDatahandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
  };
  return (
    <div>
      <NewExpense onExpenseData={expenseDatahandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};
export default App;

//in case of vanilla js we have to do ,
// const para=document.createElement('p')
// para.textContent('this is also visible.')
// const root=document.getElementsById('root')
// root.append('para')
