import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY = [
  {
    id: Math.random().toString(),
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 800,
  },
  {
    id: Math.random().toString(),
    date: new Date(2020, 4, 20),
    title: "Bike Insurance",
    amount: 300,
  },
  {
    id: Math.random().toString(),
    date: new Date(2019, 2, 11),
    title: "Mobile Insurance",
    amount: 78,
  },
  {
    id: Math.random().toString(),
    date: new Date(2022, 2, 12),
    title: "Laptop Insurance",
    amount: 200,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  function newExpenseForm(formExpenseData) {

    setExpenses([formExpenseData, ...expenses]);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onNewExpenseForm={newExpenseForm} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

