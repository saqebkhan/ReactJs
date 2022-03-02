import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: Math.random().toString(),
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 800,
    },
    {
      id: Math.random().toString(),
      expenseDate: new Date(2020, 4, 20),
      expenseTitle: "Bike Insurance",
      expenseAmount: 300,
    },
    {
      id: Math.random().toString(),
      expenseDate: new Date(2019, 2, 11),
      expenseTitle: "Mobile Insurance",
      expenseAmount: 78,
    },
    {
      id: Math.random().toString(),
      expenseDate: new Date(2022, 2, 12),
      expenseTitle: "Laptop Insurance",
      expenseAmount: 200,
    },
  ];
  const newExpenseForm = (formExpenseData) => {
   expenses.push(formExpenseData);
  }
  return (
    <div>
      <NewExpense onNewExpenseForm={newExpenseForm} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

