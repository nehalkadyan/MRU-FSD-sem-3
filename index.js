const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// impported user routes 
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

// endpoint

app.use('/api', userRoutes);

mongoose.connect("mongodb+srv://kadyannehal333_db_user:P5QZeLNkkzmKb6NE@cluster0.ifppgnj.mongodb.net/?appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log(`Server running on port 3000`));

// nCuHHHFISHhdv6uF
// kadyannehal333_db_user
