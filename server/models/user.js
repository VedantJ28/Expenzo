const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalIncome: {
    type: Number,
    default: 0,
  },
  totalExpense: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
