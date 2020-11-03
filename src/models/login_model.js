'use strict'
var dbConn = require('./../../config/db.config');


var User = function(user){
    this.uname = user.uname
    this.password = user.password
};

User.findAll = function (result){
    dbConn.query("select * from tbl_login", function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('yeah.. : ', res);
            result(null, res);
        }

    });
};

module.exports = User