const express = require("express");
const Transaction = require("../models/transaction");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all transactions");
});

router.post("/", async (req, res) => {
  const { userId, title, amount, type, category } = req.body;

  if (!userId || !title || !amount || !type || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (type !== "income" && type !== "expense") {
    return res
      .status(400)
      .json({ message: "Type must be either income or expense" });
  }

  try {
    const transaction = new Transaction({
      userId,
      title,
      amount,
      type,
      category,
    });

    const savedTransaction = await transaction.save();

    if (type === "income") {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.totalIncome += amount;
      user.balance += amount;

      await user.save();
    }

    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

// Export the router
module.exports = router;
