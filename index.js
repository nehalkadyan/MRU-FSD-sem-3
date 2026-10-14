const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config()

// impported user routes 
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

// endpoint

app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server is Running on port 3000")
})
