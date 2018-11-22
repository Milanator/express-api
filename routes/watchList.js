var express = require('express');
var router = express.Router();
var watchList = require('../models/watchList');

// ADD USER
router.get('/user/:userId/film/:filmId', function(req, res, next) {

	watchList.addToWatchList(req.params.userId,req.params.filmId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// DELETE FROM WATCHLIST
router.get('/user/:userId/film/:filmId/delete', function(req, res, next) {

	watchList.deleteToWatchList(req.params.userId,req.params.filmId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// GET WATCHLIST
router.get('/user/:userId', function(req, res, next) {

	watchList.watchList(req.params.userId, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

module.exports = router;
