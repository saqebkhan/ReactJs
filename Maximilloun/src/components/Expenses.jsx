import './expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from './Card'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].expenseTitle}
        amount={props.items[0].expenseAmount}
        date={props.items[0].expenseDate}
      />
      <ExpenseItem
        title={props.items[1].expenseTitle}
        amount={props.items[1].expenseAmount}
        date={props.items[1].expenseDate}
      />
      <ExpenseItem
        title={props.items[2].expenseTitle}
        amount={props.items[2].expenseAmount}
        date={props.items[2].expenseDate}
      />
      <ExpenseItem
        title={props.items[3].expenseTitle}
        amount={props.items[3].expenseAmount}
        date={props.items[3].expenseDate}
      />
    </Card>
  );
};
export default Expenses;
