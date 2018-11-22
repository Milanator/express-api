var express = require('express');
var router = express.Router();
var seenList = require('../models/seenList');

// ADD FROM SEENLIST
router.get('/user/:userId/film/:filmId', function(req, res, next) {

	seenList.addToSeenList(req.params.userId,req.params.filmId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// DELETE FROM SEENLIST
router.get('/user/:userId/film/:filmId/delete', function(req, res, next) {

	seenList.deleteToSeenList(req.params.userId,req.params.filmId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET SEENLIST
router.get('/user/:userId', function(req, res, next) {

	seenList.seenList(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

module.exports = router;
