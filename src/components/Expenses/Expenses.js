import { useState } from "react";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setSelectedValue(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/*selected used for making the default dropdown value to 2020 */}
        <ExpenseFilter
          selected={selectedValue}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        
        {props.items.map((expense) => (
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
