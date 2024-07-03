const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Get all users');
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

// Export the router
module.exports = router;
