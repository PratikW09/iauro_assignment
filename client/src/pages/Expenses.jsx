import ExpenseTable from '../components/ExpenseTable';

const Expenses = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">All Expenses</h2>
      <ExpenseTable />
    </div>
  );
};

export default Expenses;
