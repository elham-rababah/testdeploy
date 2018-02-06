'use strict';
var usersModel = require('./usersModel');

module.exports = {
	addNewUser : function (req,res) {
		usersModel.findOne({email :req.body.email})
		.exec(function (err,user){
			if (user){
				console.log(user,'massage user is exist')
				//return to him error massage user is exist
			} else {
				var newUser = new usersModel({
					name: req.body.name,
					password: req.body.password,
				    email: req.body.email,
				    Lists: []
				})
				newUser.save(function(err,user){
					if (err){
						//return to him error with the err
					} else {
						res.status(200).send(user);
					}
				})
			} 
		});
	}
}