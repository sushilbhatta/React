import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);
    //handling props child to parent
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // calling  the custom event handling fn to pass data from this file(child) to the App.js (parent)
        props.onExpenseData(expenseData)
        setIsEditing(false);   
    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
      return (
        <div className='new-expense'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
          )}
          {isEditing && (
            <ExpenseForm
              onSaveExpenseData={saveExpenseDataHandler}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
      );
    };
export default NewExpense