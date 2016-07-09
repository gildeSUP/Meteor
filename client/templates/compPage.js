Template.compPage.helpers({
  result: function() {
    return Results.find();
  },
  score: function() {
    return Scores.find();
  },
  gymnast: function() {
    return Gymnasts.find();
  },
});