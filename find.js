var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/example';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

  db.collection('example').find().toArray(function(error, docs) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log('Found docs:');
		docs.forEach(function(doc) {
			console.log(JSON.stringify(doc));
		});
		process.exit(0);
		});
	});
