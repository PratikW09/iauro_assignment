import express from 'express';
import {
  addExpense,
  editExpense,
  removeExpense,
  getExpense,
  getUserExpenses,
  getUserExpensesByCategory,
} from '../controllers/expense.controllers.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';


const router = express.Router();

router.post('/create/', verifyJWT, addExpense);

router.patch('/update/:id', verifyJWT, editExpense);

router.delete('/delete/:id', verifyJWT, removeExpense);

router.get('/get-expense/:id', verifyJWT, getExpense);

router.get('/my-expenses', verifyJWT, getUserExpenses);

router.get('/my-expenses/:category', verifyJWT, getUserExpensesByCategory);

export default router;
