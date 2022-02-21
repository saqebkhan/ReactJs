import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.expenseTitle}
          amount={item.expenseAmount}
          date={item.expenseDate}
        />
      ))}
    </Card>
  );
};
export default Expenses;
