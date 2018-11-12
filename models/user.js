var db = require('../database');

var user = {

	getAllUsers: function(callback) {
		return db.query('SELECT email FROM User', callback);
	},

	getUser: function(userId, callback) {
		return db.query('SELECT * FROM User WHERE id=?',[userId], callback);
	},

	addUser: function (user,callback) {
		return db.query('INSERT INTO User VALUES(?,?,?)',[
			user.name,user.email, user.password
		], callback);
	}
};

module.exports = user;