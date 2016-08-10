if (Competitions.find().count() === 0) {
	Competitions.insert({
		_id: 'marny',
		title: 'Marny og helens',
		venue: 'Trogstad',
		start_date: Date('Oct 10, 2015'),
		end_date: Date('Oct 18, 2015'),
	});	
	Competitions.insert({
		_id: 'unni',
		title: 'Unni og Haralds pokal',
		venue: 'Oslo turnhall',
		start_date: Date('Mar 12, 2015'),
		end_date: Date('Mar 14, 2015'),
	});
	Competitions.insert({
		_id: 'tredje',
		title: 'The Meteor Book',
		venue: 'Trogstad',
		start_date: Date('Mar 12, 2015'),
		end_date: Date('Mar 14, 2015'),
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
		_id: 'marny_Mangekamp',
		type: 'Mangekamp',
		ageGroup: 'Senior',
		comp_id: 'marny',
	});
	Results.insert({
		_id: 'marny_finale',
		type: 'Mangekamp',
		ageGroup: 'Senior',
		comp_id: 'marny',
	});
	Results.insert({
		_id: 'unni_Mangekamp',
		type: 'Frittstående',
		ageGroup: 'Junior',
		comp_id: 'unni',
	});
}

if (Scores.find().count() === 0){
	Scores.insert({
		res_id: 'marny_Mangekamp',
		gymnast_id: 'torT',
		floor: 10.3,
		pommel: 2.0,
		rings: 4.5,
		vault: 13.0,
		pbars: 11.0,
		hbar: 10.0
	});
	Scores.insert({
		res_id: 'unni_Mangekamp',
		gymnast_id: 'perP',
		floor: 15.4,
	});
	Scores.insert({
		res_id: 'marny_finale',
		gymnast_id: 'elias',
		floor: 200.0,
	});
}