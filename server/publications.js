Meteor.publish('competitions', function() {
	return Competitions.find();
});

Meteor.publish('gymnasts', function() {
	return Gymnasts.find();
});

Meteor.publish('results', function(_id) {
	return Results.find({comp_id: _id});
});

Meteor.publish('scores', function(liste) {
	return Scores.find({
    'res_id': { $in: liste}
	});
});