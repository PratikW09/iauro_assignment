import ExpenseChart from '../components/ExpenseChart';

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <ExpenseChart />
    </div>
  );
};

export default Dashboard;
