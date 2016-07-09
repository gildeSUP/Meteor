Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('gymnasts', function() {
	return Gymnasts.find();
});