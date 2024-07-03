const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const transactionSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['income', 'expenditure'],
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    category : {
      type: String,
      required: true
    }
  });
  
  // Create the Transaction model
  const Transaction = mongoose.model('Transaction', transactionSchema);
  
  module.exports = Transaction;