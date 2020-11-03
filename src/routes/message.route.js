const express = require('express')
const router = express.Router()
const messageController = require('../controllers/message.controller');

//Retrieve all messages
router.get('/', messageController.findAll);

//Create a new message
router.post('/', messageController.create);

module.exports = router