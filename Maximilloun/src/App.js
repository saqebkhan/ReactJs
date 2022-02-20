import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 800,
    },
    {
      expenseDate: new Date(2020, 4, 20),
      expenseTitle: "Bike Insurance",
      expenseAmount: 300,
    },
    {
      expenseDate: new Date(2019, 2, 11),
      expenseTitle: "Mobile Insurance",
      expenseAmount: 78,
    },
    {
      expenseDate: new Date(2022, 2, 12),
      expenseTitle: "Laptop Insurance",
      expenseAmount: 200,
    },
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
