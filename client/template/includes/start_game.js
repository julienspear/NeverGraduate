Session.setDefault('qustOrder', 1);
Session.setDefault('gameEp', '1');
Session.setDefault('gradeScore', 24);
Session.setDefault('gradeScore1', 24);
Session.setDefault('oderPlay', 1);
Session.setDefault('gameSeason', 0);
Session.setDefault('playView', 'Ing');

Template.startGame.events({
  "submit #new-setting": function () {
    var currSeason = event.target.currSeason.value;
    var currEpisode = event.target.currEpisode.value;
    var playerCount = event.target.playerCount.value;
    Session.set('gameSeason', currSeason);
    Session.set('gameEp', currEpisode);
    Session.set('gradeScore', playerCount);
    Session.set('gradeScore1', playerCount);

    // Clear form
    event.target.currSeason.value = "";
    event.target.currEpisode.value = "";
    event.target.playerCount.value = "";

    // Prevent default form submit
    return false;
  }
});
