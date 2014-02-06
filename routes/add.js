// Get all of our friend data
var data = require('../data.json');



exports.addFriend = function(req, res) {    
	console.log(data);
	var newFriend = {
 		'name': req.query.name,
 		'description': req.query.description,
 	 	'imageURL': 'http://lorempixel.com/400/400/people'
 	};
	res.render('add', newFriend);
	data['friends'].push(newFriend);
 }