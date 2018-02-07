'use strict';
var usersModel = require('./usersModel');

module.exports = {
	addNewUser : function (req,res) {
		usersModel.findOne({email :req.body.email})
		.exec(function (err,user){
			if (user){
				res.status(500).send({message:"user is exist"});
			} else {
				var newUser = new usersModel({
					name: req.body.name,
					password: req.body.password,
				    email: req.body.email,
				    Lists: []
				})
				newUser.save(function(err,user){
					if (err){
						res.status(500).send({message:err});
					} else {
						res.status(200).send(user);
					}
				})
			} 
		});
	}
}