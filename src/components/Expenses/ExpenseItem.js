import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";
import '../UI/Card.css'
 const ExpenseItem=(props)=> {
  const eventHandler=()=>{
    console.log('clicked!!')
  }
  return (
  <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={eventHandler}>click Here</button>
  </Card>
  );
}
export default ExpenseItem
