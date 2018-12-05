var express = require('express');
var router = express.Router();
var myList = require('../models/myList');

// GET DATA ABOUT MY LISTS - ALL DATA
router.get('/user/:userId/all', function(req, res, next) {

	myList.getAllUsersListsWithFilms(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET DATA ABOUT MY LISTS - CATEGORIES
router.get('/user/:userId/category', function(req, res, next) {

	myList.getAllUsersLists(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// add to list
router.post('/add', function(req, res, next) {

	myList.addToMyList(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// remove to list
router.post('/delete', function(req, res, next) {

	myList.deleteFromMyList(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// create list
router.post('/create', function(req, res, next) {

	myList.createMyList(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// delete list
router.delete('/delete', function(req, res, next) {

	myList.deleteMyList(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// update list
router.put('/update', function(req, res, next) {

	myList.updateMyList(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET DATA ABOUT MY LISTS - CATEGORIES
router.get('/user/:userId/category/:shortcut', function(req, res, next) {

	myList.getByShortcut(req.params.userId,req.params.shortcut, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});


module.exports = router;
