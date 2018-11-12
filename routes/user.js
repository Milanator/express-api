var express = require('express');
var router = express.Router();
var user = require('../models/user');

// ALL USERS
router.get('/', function(req, res, next) {

	user.getAllUsers(function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	})
});
// GET USER
router.get('/:userId', function(req, res, next) {

	user.getUser(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	})
});
// ADD USER
router.post('/', function(req, res, next) {

	user.addUser(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	})
});

module.exports = router;
