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
	})
});

module.exports = router;
