const express = require('express');
const router = express.Router();
const Student = require('../schema/student.js');

// Create a new student
router.post('/students', async (req, res) => {
  try {
    const studentData = req.body; // Assuming you're sending student data in the request body
    const student = new Student(studentData);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
});

module.exports = router;
