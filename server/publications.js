Meteor.publish('competitions', function() {
	return Competitions.find();
});

Meteor.publish('gymnasts', function() {
	return Gymnasts.find();
});

Meteor.publish('results', function(_id) {
	return Results.find({competition_id: _id});
});

Meteor.publish('scores', function() {
	return Scores.find();
});