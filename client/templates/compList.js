Template.compList.helpers({
  posts: function() {
    return Posts.find();
  }

});
Meteor.subscribe('posts');




