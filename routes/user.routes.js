const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.controller');

// api route / endpoint
router.post('/users/create', createUser);

module.exports = router;
