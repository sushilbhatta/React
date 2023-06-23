import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__description" >March 28th 2021</div>
      <div className="expense-item__price">
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
