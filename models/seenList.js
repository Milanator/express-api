var db = require('../database');

var seenList = {

	addToSeenList: function (userId,filmId,callback) {
		return db.query('INSERT INTO seenList (user_id,film_id) VALUES(?,?)',[
			userId, filmId
		], callback)
	}
};

module.exports = seenList;