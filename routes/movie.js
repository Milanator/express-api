var express = require('express');
var router = express.Router();
var movie = require('../models/movie');
var axios = require('axios');

let apiKey = 'e0338266d7945597731b014d7e806075';
let apiUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=' + apiKey;

/* GET home page. */
router.get('/:movieId', function(req, res, next) {

	let data, resp;
	data = axios.get(apiUrl+'&movie='+req.param.movieId)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			return error;
		}).then(function (response) {

			let data = JSON.stringify(response.data);

			res.send(data);
		});
});

module.exports = router;