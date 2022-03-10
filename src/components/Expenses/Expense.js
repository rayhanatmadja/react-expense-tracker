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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterSelected={filterSelectedHandler}
          selectValue={filterYear}
        />
        <ExpenseItem
          title={data[0].title}
          amount={data[0].amount}
          date={data[0].date}
        />
        <ExpenseItem
          title={data[1].title}
          amount={data[1].amount}
          date={data[1].date}
        />
        <ExpenseItem
          title={data[2].title}
          amount={data[2].amount}
          date={data[2].date}
        />
        <ExpenseItem
          title={data[3].title}
          amount={data[3].amount}
          date={data[3].date}
        />
      </Card>
    </div>
  );
};

export default Expense;
