import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    //handling props child to parent
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // calling  the custom event handling fn to pass data from this file(child) to the App.js (parent)
        props.onExpenseData(expenseData)
      

    }

    return( <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div> )
}
export default NewExpense