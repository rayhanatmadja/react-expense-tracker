import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => setShowForm(true);

  const hideFormHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <NewExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={hideFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add New Expenses</button>
      )}
    </div>
  );
};

export default NewExpense;
