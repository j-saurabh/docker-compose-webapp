const express = require('express');
const mongoose = require ('mongoose');

const app = express();
const PORT = 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(() => console.error(err));

app.get('/api', (req,res) => {
    res.json({ message: 'Hello from the backend!' });    
});

app.listen(PORT, () => {
    console.log(`Server is running on port $(PORT)`);
});



