Session.setDefault('qustOrder', 1);
Session.setDefault('oderPlay', 1);
Session.setDefault('playView', 'Ing');
Session.setDefault('gameSeason', '士是非飞1');

Template.startGame.events({
  "submit #new-setting": function () {
    var currSeason = event.target.currSeason.value;
    var playerOrder = Number(event.target.playerOrder.value);
    Session.set('gameSeason', currSeason);
    Session.set('qustOrder', playerOrder);

    // Clear form
    event.target.currSeason.value = "";
    event.target.playerOrder.value = "";

    // Prevent default form submit
    return false;
  }
});
