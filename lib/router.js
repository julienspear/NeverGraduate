Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('itemBank'), Meteor.subscribe('glblSet')];}
});

Router.route('/', {name: 'startGame'});
Router.route('/qust', {name: 'newItem'});
Router.route('/allQust', {name: 'allItem'});
Router.route('/qustList', {name: 'qustList'});
Router.route('/setList', {name: 'settingIn'});
Router.route('/anser', {name: 'anserQust'});
Router.route('/game', {name: 'gameMaster'});
Router.route('/result', {name: 'score'});
Router.route('/sortScore', {name: 'scoreSort'});
Router.route('/wait', {name: 'playerWaiting'});
Router.route('/view', {name: 'playerView'});


Router.route('/reply', {
  name: 'replyQust',
  data: function() { return ItemBank.findOne(this.params._id); }
  });

Router.route('/itemBank/:_id', {
  name: 'qustPage',
  data: function() { return ItemBank.findOne(this.params._id); }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'settingIn'});
Router.onBeforeAction(requireLogin, {only: 'gameMaster'});
Router.onBeforeAction(requireLogin, {only: 'qustList'});
Router.onBeforeAction(requireLogin, {only: 'anserQust'});
Router.onBeforeAction('dataNotFound', {only: 'qustPage'});
