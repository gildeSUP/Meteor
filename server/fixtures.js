if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Marny og helens',
		venue: 'Trogstad'
	});	
	Posts.insert({
		title: 'Meteor',
		venue: 'Trogstad'
	});
	Posts.insert({
		title: 'The Meteor Book',
		venue: 'Trogstad'
	});
}

if (Gymnasts.find().count() === 0) {
	Gymnasts.insert({
		name: 'Tor Torsen',
		club: 'Oslo TF'
	});	
	Gymnasts.insert({
		name: 'Per Persen',
		club: 'Njård Turn'
	});
	Gymnasts.insert({
		name: 'Elias',
		club: 'Nedre Glomma'
	});
}