import { useEffect, useState } from 'react';
import axios from '../services/api.js';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4563'];

const ExpenseChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/expense/my-expenses', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Group expenses by category
      const groupedData = res.data.data.reduce((acc, expense) => {
        const found = acc.find((item) => item.name === expense.category);
        if (found) {
          found.value += expense.amount;
        } else {
          acc.push({ name: expense.category, value: expense.amount });
        }
        return acc;
      }, []);
      setData(groupedData);
    };

    fetchExpenses();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Expense Overview</h3>
      <PieChart width={400} height={300}>
        <Pie data={data} cx={200} cy={150} labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
