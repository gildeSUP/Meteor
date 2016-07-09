if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Marny og helens',
		'venue': 'Trogstad'
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