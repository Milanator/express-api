var db = require('../database');

var watchList = {

	addToWatchList: function (userId,filmId,callback) {
		return db.query('INSERT INTO watchList (user_id,film_id) VALUES(?,?)',[
			userId, filmId
		], callback)
	},
	deleteToWatchList: function (userId,filmId,callback) {
		return db.query('DELETE from watchList WHERE user_id=? AND film_id=?',[
			userId, filmId
		], callback)
	},
	watchList: function (userId,callback) {
		return db.query('SELECT film_id from watchList WHERE user_id=?',[
			userId
		], callback)
	},
	watchListCount: function (userId,callback) {
		return db.query('SELECT COUNT(film_id) as watchCount from watchList WHERE user_id=?',[
			userId
		], callback)
	},
};

module.exports = watchList;