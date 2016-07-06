Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('', {
    name: 'frontPage'
});

Router.route('/gymnaster', {
    name: 'gymnasts'
});

Router.route('spiller/:_id', {
    name: 'player',
    data: function() {
        return Players.findOne({
            nsf_id: parseInt(this.params._id)
        });
    },
});
