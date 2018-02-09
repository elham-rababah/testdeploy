'use strict';
var usersController = require('../Users/usersController')
var listsController = require('../Lists/listsController')


module.exports = function(app){

	//users Api 
	app.post('/api/users/addnewuser', usersController.addNewUser);
	app.post('/api/users/login', usersController.logIn);

	//List Api
	app.post('/api/list/createlist', listsController.createList);
	app.get('/api/list/getAllListForOneUser/:userid', listsController.getAllListForOneUser);
	app.put('/api/list/updatelist/:listid', listsController.updateList);
	app.delete('/api/list/deletelist/:listid', listsController.deleteList);
};