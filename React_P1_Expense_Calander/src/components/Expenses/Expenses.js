import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setSelectedValue(selectedYear);
  };
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===selectedValue //if the date of the array DUMMY_Data is equal to selected data then returns true
  })

  return (
    <div>
      <Card className="expenses">
        {/*selected used for making the default dropdown value to 2020 */}
        <ExpenseFilter
          selected={selectedValue}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
         <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
