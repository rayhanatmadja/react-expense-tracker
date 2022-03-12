import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ({ onSaveExpense, onCancel }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = event => {
    const newValue = event.target.value;
    setUserInput(prevInput => {
      return { ...prevInput, enteredTitle: newValue };
    });
  };

  const amountChangeHandler = event => {
    const newValue = event.target.value;
    setUserInput(prevInput => {
      return { ...prevInput, enteredAmount: newValue };
    });
  };

  const dateChangeHandler = event => {
    const newValue = event.target.value;
    setUserInput(prevInput => {
      return { ...prevInput, enteredDate: newValue };
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpense(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
