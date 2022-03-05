import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const newExpense = (expenseData) => {
        props.onNewExpenseForm(expenseData)
    }
  return (
    <div className="new-expense">
        <ExpenseForm onNewExpense={newExpense} />
    </div>
  );
};

export default NewExpense;
