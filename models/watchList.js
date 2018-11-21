var db = require('../database');

var watchList = {

	addToWatchList: function (userId,filmId,callback) {
		return db.query('INSERT INTO watchList (user_id,film_id) VALUES(?,?)',[
			userId, filmId
		], callback)
	}
};

module.exports = watchList;