'use strict';
const Message = require('../models/message.model');

exports.findAll = function(req, res) {
    Message.findAll(function(err, message) {
        console.log('controller')
        if(err)
        res.send(err);
        console.log('res', message);
        res.send(message);
    });
};

exports.create = function(req, res){
    const new_message = new Message(req.body);

    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field'});

    }
    else{
        Message.create(new_message, function(err, message){
            if(err)
            res.send(err);
            res.json({error:false, message: "Message added successfully!",data:message});

        });
    }
};