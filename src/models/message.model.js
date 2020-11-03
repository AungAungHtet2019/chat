'use strict'
var dbConn = require('./../../config/db.config');

//Message object create
var Message = function(message){
    this.message = message.message;
};

Message.create = function (newMsg, result){
    dbConn.query("insert into tbl_message set ?", newMsg, function (err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }

    });
};

Message.findAll = function (result){
    dbConn.query("select * from tbl_message", function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('messages : ', res);
            result(null, res);
        }

    });
};


module.exports = Message;