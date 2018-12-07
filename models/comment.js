var db = require('../database');

var comment = {

	addComment: function (body,callback) {
		return db.query(
			`INSERT INTO comment(content,user_id,movie_id,created_at) VALUES(?,?,?,CURRENT_TIMESTAMP())`
			,[body.content,body.userId,body.movieId], callback)
	},

	getComments: function (movieId,offset,callback) {
		return db.query(
			`SELECT comment.*, user.name, user.profile_picture FROM comment JOIN user ON user.id = comment.user_id WHERE movie_id=? ORDER BY comment.created_at DESC LIMIT 5 OFFSET ?`,[movieId,Number(offset)], callback)
	}
};

module.exports = comment;