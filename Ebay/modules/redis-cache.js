var redis = require('redis');
var client = redis.createClient(6379, "127.0.0.1");
var Constants = require('./constants');


var RedisCache = function () {};

RedisCache.cachedSqlQueries	= [Constants.SELECT_PRODUCT_QUERY, Constants.SELECT_CAT_QUERY, Constants.SELECT_COUNT_QUERY];

client.on("error", function (err) {
    console.log("Error connecting REDIS Cache Server " + err);
});


RedisCache.getCachedSqlQueries = function() {
	return RedisCache.cachedSqlQueries;
};


/**
 * Caching products into REDIS database
 */
RedisCache.cacheProducts = function(products) {
	console.log("Caching products");
	client.set(Constants.SELECT_PRODUCT_QUERY, JSON.stringify(products));
};


/**
 * Getting cached Products from REDIS database
 */
RedisCache.getCachedProducts = function(callback) {
	console.log("-----------------------------ENTERED INTO REDIS CACHE---------------------------");
	RedisCache.getCachedDetails(Constants.SELECT_PRODUCT_QUERY, callback);
};

/**
 * Caching Categories
 */
RedisCache.cacheCategories = function(categories) {
	console.log("Caching Categories");
	client.set(Constants.SELECT_CAT_QUERY, JSON.stringify(categories));
};

/**
 * Getting cached Categories
 */
RedisCache.getCachedCategories = function(callback) {
	RedisCache.getCachedDetails(Constants.SELECT_CAT_QUERY, callback);
};


/**
 * Caching Sellers
 **/
RedisCache.cacheSellers = function(sellers) {
	console.log("Caching sellers");
	client.set(Constants.SELECT_SELLER_QUERY, JSON.stringify(sellers));
};

/**
 * Getting cached Sellers
 */
RedisCache.getCachedSellers = function(callback) {
	RedisCache.getCachedDetails(Constants.SELECT_SELLER_QUERY, callback);
};



/**
 * Caching Count
 */
RedisCache.cacheCount = function(count) {
	console.log("Caching count");
	client.set(Constants.SELECT_COUNT_QUERY, JSON.stringify(count));
};

/**
 * Getting cached Count
 */
RedisCache.getCachedCount = function(callback) {
	RedisCache.getCachedDetails(Constants.SELECT_COUNT_QUERY, callback);
};

/**
 * Caching Queries
 */
RedisCache.cacheDetails = function(key, data) {
	console.log("Caching details. Query --> " + key);
	client.set(key, JSON.stringify(data));
};

/**
 * To fetch cached details mapped by provided key
 */
RedisCache.getCachedDetails = function(key, callback) {
	console.log("Fetching cached details for --> " + key);
	client.get(key, function (err, reply){
		callback(err, JSON.parse(reply));
	});
};

module.exports = RedisCache;