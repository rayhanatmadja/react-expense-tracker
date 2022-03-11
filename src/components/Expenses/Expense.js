import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expense = ({ data }) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterSelectedHandler = enteredSelectedData => {
    setFilterYear(enteredSelectedData);
  };

  const filteredExpenses = data.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterSelected={filterSelectedHandler}
          selectValue={filterYear}
        />
        {filteredExpenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expense;
