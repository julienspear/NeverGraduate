Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('itemBank'), Meteor.subscribe('glblSet')];}
});

Router.route('/setting', {name: 'startGame'});
Router.route('/qust', {name: 'newItem'});
Router.route('/allQust', {name: 'allItem'});
Router.route('/qustList', {name: 'qustList'});
Router.route('/setList', {name: 'settingIn'});
Router.route('/answerp', {name: 'anserQust'});
Router.route('/game', {name: 'gameMaster'});
Router.route('/resultp', {name: 'score'});
Router.route('/sortScore', {name: 'scoreSort'});
Router.route('/wait', {name: 'playerWaiting'});
Router.route('/view', {name: 'playerView'});
Router.route('/', {name: 'login'});
Router.route('/answer', {name: 'anserQust1'});
Router.route('/result', {name: 'score1'});
Router.route('/presult', {name: 'score2'});
Router.route('/playresult', {name: 'score22'});
Router.route('/Aresult', {name: 'score3'});
Router.route('/Shstory', {name: 'shareStory'});
Router.route('/story', {name: 'shareStory1'});
Router.route('/waiting', {name: 'wait'});
Router.route('/qipan', {name: 'daping'});
Router.route('/vcr', {name: 'vcr'});
Router.route('/player1', {name: 'player1'});
Router.route('/player2', {name: 'player2'});
Router.route('/player3', {name: 'player3'});
Router.route('/player4', {name: 'player4'});
Router.route('/zcr', {name: 'zcr'});

Router.route('/reply/:_id', {
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
Router.onBeforeAction(requireLogin, {only: 'anserQust1'});
Router.onBeforeAction('dataNotFound', {only: 'qustPage'});
