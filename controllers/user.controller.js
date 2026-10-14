const User = require('../models/user.model');
const bcrypt = require("bcryptjs")

const createUser = async (req, res) => {

  // take data of these fields from body
  const { username, email, password } = req.body

  // hashing

  // check whether user already exists with this email and username

  // username
  const existingUserWithUsername = await User.findOne({ username })

  if (existingUserWithUsername) {
    return res.json({ message: "User already exists with this username!" })
  }

  // email
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    return res.json({ message: "User already exists with this email. Try with a different mail." })
  }

  // encrypt / hash the password

  const hashedPassword = await bcrypt.hash(password, 10)

  // 1234
  // $yiewrbfhrjsgy623784hjdsghfjidejghtiherjbfjh

  //  create new user
  const user = User({
    username,
    email,
    password: hashedPassword
  })

  // save in database
  await user.save()
  res.json({ message: "User is created successfully", user });
};

// login/signin controller

const signin = async (req, res) => {
  try {
    // data - email, password
    const { email, password } = req.body
    // check whether user exists or not

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    // check whether the password matches or not
    // if password is correct
    //  isPasswordValid = true
    // if password does not match, isPasswordValid = false
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.json({ message: "Password is incorrect!" })
    }
    // when user is valid and password also matches
    return res.status(200).json({ message: "User logged in succesfully!", user })

  } catch (err) {
    console.log("err", err)
  }
}

// controller to get/fetch users from databse

const getUsers = async (req, res) => {
  try {
    // fetch users from mongodb
    const users = await User.find()

    return res.status(200).json({ message: "Users fetched successfully", users })
  } catch (err) {
    console.log("Error when trying to fetch users", err)
  }
}

module.exports = { createUser, signin, getUsers };
