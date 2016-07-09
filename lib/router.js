Router.configure({
    layoutTemplate: 'layout',
    ladingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { 
        return Meteor.subscribe('posts'); 
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
Router.route('/spiller/:_id', {
    name: 'compPage',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'compPage'});