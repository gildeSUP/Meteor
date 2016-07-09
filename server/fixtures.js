if (Competitions.find().count() === 0) {
	Competitions.insert({
		_id: 'marny',
		title: 'Marny og helens',
		venue: 'Trogstad',
	});	
	Competitions.insert({
		_id: 'annen',
		title: 'Meteor',
		venue: 'Trogstad'
	});
	Competitions.insert({
		_id: 'tredje',
		title: 'The Meteor Book',
		venue: 'Trogstad'
	});
}

if (Gymnasts.find().count() === 0) {
	Gymnasts.insert({
		_id: 'torT',
		name: 'Tor Torsen',
		club: 'Oslo TF'
	});	
	Gymnasts.insert({
		_id: 'perP',
		name: 'Per Persen',
		club: 'Njård Turn'
	});
	Gymnasts.insert({
		_id: 'elias',
		name: 'Elias',
		club: 'Nedre Glomma'
	});
}

if (Results.find().count() === 0){
	Results.insert({
		_id: 'marnyMangekamp',
		type: 'Mangekamp',
		ageGroup: 'Senior',
		competition_id: 'marny',
	});
}

if (Scores.find().count() === 0){
	Scores.insert({
		res_id: 'marnyMangekamp',
		gymnast_id: 'torT',
		floor: 10.3,
		pommel: 2.0,
		rings: 4.5,
		vault: 13.0,
		pbars: 11.0,
		hbar: 10.0
	});
}