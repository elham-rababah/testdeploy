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
				newList.save(function(err,list) {
					if (list) {
						res.status(200).send(list);
					} else {
						res.status(500).send({message:err});
					}

				})
			} else {
				res.status(500).send({message:"User not exist"});
			}

		})
	},
	getAllListForOneUser : function(req,res){
		console.log(req.params	)
		ListModel.find({userid:req.params.userid})
		.exec(function(err,lists){
			if(lists){
				res.status(200).send(lists)
			} else {
				res.status(500).send({message:err});
			}

		})

	},
	updateList : function(req,res){
		ListModel.findById(req.params.listid)
		.exec(function(err,list){
			if(list){
				list.title = req.body.title || list.title;
		        list.items = req.body.items || list.items;
		        list.userid = req.body.userid || list.userid;
		        list.createdDate = req.body.createdDate || list.createdDate;
		        
		        list.save(function(err,updatedList){
		        	if (updatedList) {
		        		res.status(200).send(updatedList)
		        	} else {
		        		res.status(500).send({message:err});
		        	}
		        });
			} else {
				res.status(500).send({message:"we can't load this list any more"});
			}

		})
	},
	deleteList : function (req,res){
		console.log(req.params.listid);
		ListModel.findByIdAndRemove(req.params.listid)
		.exec(function(err,list){
			if (list) {
				//we want want to delete list
				let response = {
			        message: "list successfully deleted",
			        listid: list._id
			    };
			    res.status(500).send(response);

			} else {
				res.status(500).send({message:"we can't load this list any more"});
			}
		})

	}
}