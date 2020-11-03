const express = require('express');
const router = express.Router();
const userController = require('../controllers/login_controller');

//Retrieve all user
router.get('/', userController.findAll);

module.exports = router