const express = require('express');
const mongoose = require('mongoose');
const customer = require('./models/customers');

const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define the port to listen on
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://waspa:EIQDbhSZV0WBvCru@cluster0.webjczq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB Atlas Connection');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const Student = require('./schema/student'); 

app.post('/student', async (req, res) => {
    try {
      // Create a new student document with the specified data
      const newStudent = new Student({
        name: 'John',
        first_name: 'Doe',
        email: 'john@doe.com',
      });
  
      // Save the new student document to the database
      await newStudent.save();
  
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ error: 'Error creating student' });
    }
  });

// Define a route
app.get('/', (req, res) => {
  res.send('MongoDB Atlas!');
});
// As many routes as I want
app.get('/students', (req, res) => {
    res.send('Where are my students?');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
