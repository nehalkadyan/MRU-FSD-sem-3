const express = require('express');
const router = express.Router();
const { createUser, signin } = require('../controllers/user.controller');

router.post('/signup', createUser);
router.post("/signin", signin)

module.exports = router;

// api testing -> full / complete route

// signup testing route/endpoint -> http://localhost:3000/api/signup
// signin testing route/endpoint -> http://localhost:3000/api/signin
