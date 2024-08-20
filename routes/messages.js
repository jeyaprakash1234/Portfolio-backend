const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// POST request to create a new message
router.post('/', async (req, res) => {
    const { name,email, message } = req.body;

    try {
        const newMessage = new Message({
            name,
           
            email,
            message
        });

        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET request to retrieve all messages




module.exports = router;
