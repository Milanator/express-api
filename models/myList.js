var db = require('../database');

var myList = {

	myListsAllContent: function (userId,callback) {
		return db.query(
			`SELECT myList.shortcut,myList.id,myList.name,myList_movie.*,movie.*
			FROM myList
			JOIN myList_movie ON myList_movie.myList_id = myList.id
			JOIN movie ON movie.movie_id = myList_movie.movie_id
			WHERE myList.user_id = ?`
			,[userId], callback)
	},

	MyListCategories: function (userId,callback) {
		return db.query(
			`SELECT id,name
			FROM myList
			WHERE myList.user_id = ?`
			,[userId], callback)
	},

	addToMyList: function (body,callback) {
		return db.query('INSERT INTO myList_movie (movie_id,myList_id) VALUES(?,?)'
			,[body.movieId,body.listId], () => {
				return db.query(
					'INSERT INTO movie (movie_id,title,overview,poster_path,language,vote_average)' +
					'SELECT * FROM (SELECT ?,?,?,?,?,?) AS tmp ' +
					'WHERE NOT EXISTS (' +
					'SELECT title FROM movie WHERE title = ?' +
					') LIMIT 1;'
					,[body.movieId,body.title,body.overview,body.posterPath,body.originalLanguage,body.voteAverage,body.title],callback);
		});
	},

	deleteFromMyList: function (body,callback) {
		return db.query('DELETE from myList_movie WHERE myList_id=? AND movie_id=?',[
			body.myListId,body.movieId
		], callback);
	},

	createMyList: function(body, callback) {
		return db.query('INSERT INTO myList (user_id,name,first,shortcut) VALUES(?,?,?,?)',[body.userId,body.name,body.first,body.shortcut],callback);
	},

	getByShortcut: function(userId,shortcut,callback){
		return db.query('SELECT movie_id,myList_id,shortcut from myList JOIN myList_movie ON myList_movie.myList_id = myList.id WHERE user_id=? AND myList.shortcut=?',[userId,shortcut], callback)
	}
};

module.exports = myList;