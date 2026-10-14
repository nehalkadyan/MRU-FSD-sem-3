const User = require('../models/user.model');
// import bcryptjs

const bcrypt = require("bcryptjs")

const createUser = async (req, res) => {

  // take data of these fields from body
  const { username, email, password } = req.body

  // check whether user already exists with this email and username

  // username
  const existingUserWithUsername = await User.findOne({username})

  if(existingUserWithUsername){
    return res.json({message : "User already exists with this username!"})
  }

  // email
  const existingUser = await User.findOne({email})

  if(existingUser){
    return res.json({message : "User already exists with this email. Try with a different mail."})
  }

  // encrypt / hash the password

  const hashedPassword = await bcrypt.hash(password, 10)

  // 1234
  // $yiewrbfhrjsgy623784hjdsghfjidejghtiherjbfjh

  //  create new user
  const user = User({
    username,
    email,
    password : hashedPassword
  })

  // save in database
  await user.save()
  res.json({ message: "User is created successfully", user });
};

module.exports = { createUser };
