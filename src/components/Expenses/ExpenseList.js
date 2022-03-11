import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return <h2 className="expenses-list__fallback">Not Found Expense Data.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredData.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
