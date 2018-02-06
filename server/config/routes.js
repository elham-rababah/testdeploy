'use strict';
var usersController = require('../Users/usersController')

module.exports = function(app){
	app.post('/api/users/addnewuser', usersController.addNewUser);
};