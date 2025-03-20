import { createExpense, deleteExpense, updateExpense } from '../services/expense.services.js';


const addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;



    if (!amount || !description || !category) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    const userId = req.user._id;
    console.log(userId);

    const expense = await createExpense({
      userId,
      amount,
      description,
      category,
    });

    res.status(201).json({
      success: true,
      message: 'Expense created successfully',
      data: expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to add expense',
    });
  }
};

const editExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const { amount, description, category } = req.body;
  
      if (!amount || !description || !category) {
        return res.status(400).json({ message: 'Please provide all fields' });
      }
      if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ message: 'Invalid amount' });
      }
  
      const expense = await updateExpense(id, req.body);
  
      res.status(200).json({
        success: true,
        message: 'Expense updated successfully',
        data: expense,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message || 'Failed to update expense',
      });
    }
  };
  
  
  const removeExpense = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await deleteExpense(id);
  
      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message || 'Failed to delete expense',
      });
    }
  };
  
  const getExpense = async (req, res) => {
    try {
      const { id } = req.params;
  
      const expense = await getExpenseById(id);
  
      res.status(200).json({
        success: true,
        data: expense,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message || 'Expense not found',
      });
    }
  };
  
 
  const getUserExpenses = async (req, res) => {
    try {
      const expenses = await getExpensesByUserId(req.user._id);
  
      res.status(200).json({
        success: true,
        data: expenses,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message || 'No expenses found',
      });
    }
  };
  
  const getUserExpensesByCategory = async (req, res) => {
    try {
      const { category } = req.params;
  
      const expenses = await getExpensesByCategoryForUser(req.user._id, category);
  
      res.status(200).json({
        success: true,
        data: expenses,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message || 'No expenses found for this category',
      });
    }
  };
  
  export {
    addExpense,
    editExpense,
    removeExpense,
    getExpense,
    getUserExpenses,
    getUserExpensesByCategory,
  };


