import { useState } from "react";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setSelectedValue(selectedYear);
  };
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===selectedValue
  })
  return (
    <div>
      <Card className="expenses">
        {/*selected used for making the default dropdown value to 2020 */}
        <ExpenseFilter
          selected={selectedValue}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}//knows where to put the new list
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
