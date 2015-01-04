var connection;
var mysql = require('mysql');
var Redis = require("./redis-cache");

function connect() {
	connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'Password12',
		port : '3306',
		database : 'ebay'
	});
}

connect();

/**
 * Checks whether query is cached or not.
 * If it is cached then returns cached results else fetches results from db and then returns it
 * @param sql	Query
 * @param callBack	Call back function
 */
function fireQuery(sql, callBack) {
	for(var i = 0; i < Redis.getCachedSqlQueries().length; i++) {
		var query = Redis.getCachedSqlQueries()[i];
		if(sql === query) {
			Redis.getCachedDetails(query, callBack);
			return;
		}
	}
	//Redis.getCachedSqlQueries().push(sql);
	connection.query(sql, function(err, result) {
		//Redis.cacheDetails(sql, result);
		callBack(err, result);
	});
}

exports.executeSQL = function (sql, callBack) {
	connection.query(sql,callBack);
};

function fetchTime(callback){
	var currentdate = new Date();
	var datetime = "" + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/"+ currentdate.getFullYear() + " @ "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ":"+ currentdate.getSeconds();
	console.log(datetime);
	callback(datetime);
}

exports.fetchTime=fetchTime;
exports.fireQuery = fireQuery;