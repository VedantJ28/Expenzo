const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;

// Register
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ msg: "User registered Successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Email not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Generate JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(payload, JWT_KEY, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

// Verification of token
exports.verifyToken = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ msg: "Token is not valid" });
    }
};

exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
