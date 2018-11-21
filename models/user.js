var db = require('../database');

var user = {

	getAllUsers: function(callback) {
		return db.query('SELECT name,email,password FROM User', callback);
	},

	getUserById: function(userId, callback) {
		return db.query('SELECT * FROM User WHERE id=?',[userId], callback);
	},

	checkUser: function(user, callback) {
		return db.query('SELECT id,email,profile_picture,name FROM User WHERE email=? AND password=?',[user.email,user.password], callback);
	},

	addUser: function (user,callback) {

		return db.query('INSERT INTO User (name,email,password) VALUES(?,?,?)',[
			user.name, user.email, user.password,user.email
		], callback);
	}
};

module.exports = user;