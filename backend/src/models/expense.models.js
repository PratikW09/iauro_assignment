import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Food', 'Transport', 'Shopping', 'Entertainment', 'Others'],
    },
  },
  {
    timestamps: true, 
  }
);

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
