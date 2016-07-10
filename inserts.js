var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(url, function(error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
		}
		
		var doc = {
			title: 'Jaws',
			year: 1975,
			director: 'Steven Speilberg',
			rating: 'PG',
			ratings:{
				critics:80,
				audience:97
				},
			screenplay: ['Peter Benchley', 'Carl Gotlieb']
			};
		
		db.collection('movies').insert(doc, function(error, result) {
			if (error) {
			console.log(error);
			process.exit(1);
			}
			
		db.collection('movies').find().toArray(function(error, docs){
			if (error) {
			console.log(error);
			process.exit(1);
			}
			
			var query = { year: 1975};
			//var query = {screenplay : 'Peter Benchley'};
			//var query = {'ratings.audience' : {$gte : 90}};
			db.collection('movies').find(query).toArray(function(error,docs){
				if (error){
				console.log(error);
				process.exit(1)
				}
			console.log('Found docs:');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
				});
				process.exit(0);
			});			
		});
	});
});