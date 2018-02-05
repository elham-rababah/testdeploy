'use strict';

module.exports = function(app){
	app.get('/api/hello', (req, res) => {
		console.log("test");
		res.send({data:[]});
	})
};