var express = require('express');
var router = express.Router();
var myList = require('../models/myList');

// GET DATA ABOUT MY LISTS - ALL DATA
router.get('/user/:userId/all', function(req, res, next) {

	myList.myListsAllContent(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET DATA ABOUT MY LISTS - CATEGORIES
router.get('/user/:userId/category', function(req, res, next) {

	myList.MyListCategories(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET DATA ABOUT MY LISTS - CATEGORIES
router.get('/user/:userId/category', function(req, res, next) {

	myList.MyListCategories(req.params.userId, function (err, rows) {

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


module.exports = router;
