const User = require('../models/user.model');
const bcrypt = require("bcryptjs")

const createUser = async (req, res) => {

  const { username, email, password } = req.body

  // hashing

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = User({
    username,
    email,
    password: hashedPassword
  })

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

module.exports = { createUser, signin };
