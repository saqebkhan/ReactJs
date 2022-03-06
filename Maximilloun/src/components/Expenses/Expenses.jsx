import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandeler}
        />
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.expenseTitle}
            amount={item.expenseAmount}
            date={item.expenseDate}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
