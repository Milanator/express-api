var db = require('../database');

var seenList = {

	addToSeenList: function (userId,filmId,callback) {
		return db.query('INSERT INTO seenList (user_id,film_id) VALUES(?,?)',[
			userId, filmId
		], callback)
	},

	deleteToSeenList: function (userId,filmId,callback) {
		return db.query('DELETE from seenList WHERE user_id=? AND film_id=?',[
			userId, filmId
		], callback)
	},

	seenList: function (userId,callback) {
		return db.query('SELECT film_id from seenList WHERE user_id=?',[
			userId
		], callback)
	},

	seenListCount: function (userId,callback) {
		return db.query('SELECT COUNT(film_id) as seenCount from seenList WHERE user_id=?',[
			userId
		], callback)
	},
};

module.exports = seenList;