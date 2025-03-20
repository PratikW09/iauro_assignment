import { useEffect, useState } from 'react';
import axios from '../services/api.js';

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/expense/my-expenses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("res",res.data);
      setExpenses(res.data.data);
    };
    fetchExpenses();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id} className="border-b">
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2">${expense.amount}</td>
              <td className="px-4 py-2">{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
