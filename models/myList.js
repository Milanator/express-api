var db = require('../database');

var myList = {

	myListsAllContent: function (userId,callback) {
		return db.query(
			`SELECT myList.id,myList.name,myList_film.*,movie.*
			FROM myList
			JOIN myList_film ON myList_film.myList_id = myList.id
			JOIN movie ON movie.movie_id = myList_film.movie_id
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
		return db.query('INSERT INTO myList_film (movie_id,myList_id) VALUES(?,?)'
			,[body.movieId,body.listId], () => {
				return db.query(
					'INSERT INTO movie (movie_id,title,overview,poster_path,language)' +
					'SELECT * FROM (SELECT ?,?,?,?,?) AS tmp ' +
					'WHERE NOT EXISTS (' +
					'SELECT title FROM movie WHERE title = ?' +
					') LIMIT 1;'
					,[body.movieId,body.title,body.overview,body.posterPath,body.originalLanguage,body.title],callback);
		});
	},

	deleteFromMyList: function (body,callback) {
		return db.query('DELETE from myList_film WHERE myList_id=? AND movie_id=?',[
			body.myListId,body.movieId
		], callback);
	},
};

module.exports = myList;