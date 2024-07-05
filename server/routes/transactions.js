const express = require("express");
const Transaction = require("../models/transaction");
const User = require("../models/user");
const router = express.Router();
const mongoose = require("mongoose")

router.get("/", (req, res) => {
  res.send("Get all transactions");
});

router.post('/income', async (req, res) => {
  const { userId, title, amount, category } = req.body;

  try {
    // Validate required fields
    if (!userId || !title || !amount || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new transaction
    const transaction = new Transaction({
      userId,
      title,
      amount,
      type: 'income',
      category,
    });

    // Save transaction
    const savedTransaction = await transaction.save();

    // Update user's totalIncome and balance
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.totalIncome += parseFloat(amount);
    user.balance += parseFloat(amount);

    await user.save();

    // Respond with saved transaction
    res.status(201).json(savedTransaction);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Failed to add income' });
  }
});

router.post("/expenses", async (req, res) => {
  const { userId, title, amount, category } = req.body;

  if (!userId || !title || !amount || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const transaction = new Transaction({
      userId,
      title,
      amount,
      type: "expense",
      category,
    });

    const savedTransaction = await transaction.save();

    user.totalExpense += amount;
    user.balance -= amount;

    await user.save();

    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/transactions", async (req, res) => {
  const { userId, page = 1, limit = 6 } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const transactions = await Transaction.find({ userId })
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Transaction.countDocuments({ userId });

    res.status(200).json({
      transactions,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a transaction
// router.delete("/transactions/:id", async (req, res) => {
//   const { id } = req.params;


//   try {
//     const user = await User.findById(id);
//     const transaction = await Transaction.findById(id);
//     if (!transaction) {
//       return res.status(404).json({ message: "Transaction not found" });
//     }
//     await Transaction.findByIdAndDelete(id);
    

//     res.status(200).json({ message: "Transaction deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/recent", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const recentTransactions = await Transaction.find({ userId })
      .sort({ date: -1 }) // Sort by date in descending order to get the most recent transactions first
      .limit(5); // Limit to the latest 5 transactions

    res.status(200).json(recentTransactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/categoryExpenses/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const categoryData = await Transaction.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId), type: 'expense' } },
      { $group: { _id: '$category', totalAmount: { $sum: '$amount' } } },
    ]);

    if (categoryData.length === 0) {
      categoryData.push({ _id: 'No Expenses', totalAmount: 100 });
    }

    res.json(categoryData);
  } catch (err) {
    console.error('Error fetching category expenses:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// Export the router
module.exports = router;
