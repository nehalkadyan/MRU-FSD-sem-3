const User = require('../models/user.model');

const createUser = async (req, res) => {

  const { username, email, password } = req.body

  const user = User({
    username,
    email,
    password
  })

  await user.save()
  res.json({ message: "User is created successfully", user });
};

module.exports = { createUser };
