var express = require('express');
var router = express.Router();
var comment = require('../models/comment');

// add comment
router.post('/add', function(req, res, next) {

	comment.addComment(req.body, function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});

// select all comments by movie id
router.get('/movie/:movieId/:offset', function(req, res, next) {

	comment.getComments(req.params.movieId, req.params.offset,function (err, rows) {

		if( err ){
			res.json(err);
		} else{
			res.json(rows);
		}
	});
});


module.exports = router;
