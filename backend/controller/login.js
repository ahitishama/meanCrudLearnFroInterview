var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Get Usser Model
require('../models/user')
var user = mongoose.model('User');

// post login
router.post('/authenticate',function(req,res){

  var username = req.body.email;
  var password = req.body.password;

    user.findOne({email: username},function(err,user){
      if (err) console.log(err);
      console.log(user);
      if (user) {
        if(user.validPassword(password)){
          user.save(function(err) {
            var token;
            token = user.generateJwt();
            res.status(200);
            res.json({
              "token" : token,
              "user" : user
            });
          });
        }
        else{
          res.status(204);
          res.json('Password not matched')
        }
      } else {
        res.status(204);
        res.json("invalidLogin");
      }
   });
});

//Exports
module.exports = router;
