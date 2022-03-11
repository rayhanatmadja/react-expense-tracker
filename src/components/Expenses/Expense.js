import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";

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
        <ExpenseList filteredData={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
