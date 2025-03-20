import Expense from '../models/expense.models.js';

// Create Expense
const createExpense = async (data) => {
  const { userId, amount, description, category } = data;

  const expense = await Expense.create({
    userId: userId,
    amount,
    description,
    category,
  });

  if (!expense) {
    throw new Error('Failed to create expense');
  }

  return expense;
};

const updateExpense = async (expenseId, data) => {
  const expense = await Expense.findByIdAndUpdate({_id:expenseId}, data, {
    new: true,
    runValidators: true,
  });

  if (!expense) {
    throw new Error('Expense not found');
  }

  return expense;
};

const deleteExpense = async (expenseId) => {
  const expense = await Expense.findByIdAndDelete(expenseId);

  if (!expense) {
    throw new Error('Expense not found');
  }

  return { message: 'Expense deleted successfully' };
};

const getExpenseById = async (expenseId) => {
  const expense = await Expense.findById({_id:expenseId}).populate('user', 'name email');

  if (!expense) {
    throw new Error('Expense not found');
  }

  return expense;
};


const getExpensesByUserId = async (userId) => {
  const expenses = await Expense.find({ userId: userId }).sort({ createdAt: -1 });

  if (!expenses || expenses.length === 0) {
    throw new Error('No expenses found');
  }

  return expenses;
};

const getExpensesByCategoryForUser = async (userId, category) => {
  const expenses = await Expense.find({ user: userId, category }).sort({
    createdAt: -1,
  });

  if (!expenses || expenses.length === 0) {
    throw new Error('No expenses found for this category');
  }

  return expenses;
};

export {
  createExpense,
  updateExpense,
  deleteExpense,
  getExpenseById,
  getExpensesByUserId,
  getExpensesByCategoryForUser,
};
