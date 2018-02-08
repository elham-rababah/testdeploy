'use strict';
var ListModel = require('./listsModel');
var UsersModel = require('../Users/usersModel');



module.exports = {
	createList : function(req,res){
		//check the user in case the request not comming from the browser
		UsersModel.findOne({_id :req.body.userid}).
		exec(function (err,user){
			if (user){
				var newList = new ListModel ({
					title : req.body.title,
				    items: req.body.items,
				    userid: req.body.userid
				});
				console.log(newList);
				newList.markModified();
				newList.save(function(err,list) {
					if (list) {
						res.status(200).send(list);
					} else{
						res.status(500).send({message:err});
					}

				})
			} else {
				res.status(500).send({message:"User not exist"});
			}

		})



	}
}