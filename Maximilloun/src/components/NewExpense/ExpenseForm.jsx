import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandelerChanged = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountHandelerChanged = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateHandelerChanged = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandeler = (e) => {
    e.preventDefault();

     const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onNewExpense(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandeler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleHandelerChanged} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.1"
              value={enteredAmount}
              onChange={amountHandelerChanged}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateHandelerChanged}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
