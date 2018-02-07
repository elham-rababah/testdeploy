'use strict';
var usersModel = require('./usersModel');

module.exports = {
	addNewUser : function (req,res) {
		console.log(req.body);
		usersModel.findOne({email :req.body.email})
		.exec(function (err,user){
			if (user){
				res.status(500).send({message:"email is exist"});
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
						console.log(user);
						res.status(200).send(user);
					}
				})
			} 
		});
	},
	logIn : function (req,res) {
		console.log(req.body);
		usersModel.findOne({email :req.body.email})
		.exec(function (err,user){
			console.log(err,user)
			//
			if (user){
				usersModel.comparePassword(req.body.password,user.password,res,function(isMatch) {
					if (isMatch){
						res.status(200).send(user);
					} else {
						res.status(500).send({message:"password is wrong"});
					}

				})
				
			} else {
				res.status(500).send({message:"email is not exist"});
			} 
		});
	}
}