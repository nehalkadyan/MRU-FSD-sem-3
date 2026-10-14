const express = require('express');
const router = express.Router();
const { createUser, signin, getUsers } = require('../controllers/user.controller');

router.post('/', createUser);
router.post("/signin", signin)
// api endpoint to fetch users
router.get("/fetch-users", getUsers)

module.exports = router;

// api testing -> full / complete route

// signup testing route/endpoint -> http://localhost:3000/api/signup
// signin testing route/endpoint -> http://localhost:3000/api/signin

// fetch users complete testing endpoint -> http://localhost:3000/api/fetch-users

