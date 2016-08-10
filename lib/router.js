Router.configure({
    layoutTemplate: 'layout',
    ladingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { 
        return Meteor.subscribe('competitions'); 
    }
});

Router.route('/', {
    name: 'frontPage'
});

Router.route('/gymnaster', {
    name: 'gymnasts',
    waitOn: function() { 
        return Meteor.subscribe('gymnasts'); 
    }
});

Router.route('/resultat/:_id', {
    name: 'compPage',
    data: function() { 
        return Competitions.findOne(this.params._id); 
    }, 
    waitOn: function() { 
        return [
                Meteor.subscribe('results', this.params._id),
                Meteor.subscribe('scores', Results.find().map(function(item){ return item._id; })),
                Meteor.subscribe('gymnasts'),
            ]
    }
});

Router.onBeforeAction('dataNotFound', {only: 'compPage'});