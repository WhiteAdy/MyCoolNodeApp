const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

app.post('/add', (req, res) => {
	console.log(req.body);

	mongoose.connect(
		'mongodb+srv://Mozartino:Mozarella920%23@mozzarella-0ndgi.azure.mongodb.net/meh?retryWrites=true&w=majority',
		{ useNewUrlParser: true }
	);
	let db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		db.db.collection('meh_collection', function(err, collection) {
			collection.insertOne({
				name: req.body.name,
				age: req.body.age,
				sex: req.body.sex
			});
		});
	});
	res.send('caca');
});

app.get('/mongo', (req, res) => {
	mongoose.connect(
		'mongodb+srv://Mozartino:Mozarella920%23@mozzarella-0ndgi.azure.mongodb.net/meh?retryWrites=true&w=majority',
		{ useNewUrlParser: true }
	);
	let db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		// let mozzarellaSchema = new Schema(
		// 	{
		// 		name: String,
		// 		email: String,
		// 		movie_id: ObjectId,
		// 		text: String,
		// 		date: { type: Date, default: Date.now }
		// 	},
		// 	{
		// 		collection: 'Mozzarella'
		// 	}
		// );
		// let Mozzarella = mongoose.model('Mozzarella', mozzarellaSchema);
		db.db.collection('meh_collection', function(err, collection) {
			collection.find().toArray(function(err, data) {
				// console.log('data: ', data); // it will print your collection data
				res.json({ caca: data });
			});
		});
	});
});

app.listen(process.env.PORT || 5000);

// const MongoClient = require('mongodb').MongoClient;
// const uri =
// 	'mongodb+srv://Mozartino:Mozarella920%23@mozzarella-0ndgi.azure.mongodb.net/test?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db('Mozzarella').collection('sample_mflix');
//     client.close();
// });
