const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Define your routes here
router.get('/', (req, res) => {
    res.send('Get all users');
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

router.get('/:id/financials', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('totalIncome totalExpense balance');
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json({
            totalIncome: user.totalIncome,
            totalExpense: user.totalExpense,
            balance: user.balance,
        });
    } catch (error) {
        res.status(500).send('Server error' + error.message);
    }
});

// Export the router
module.exports = router;
