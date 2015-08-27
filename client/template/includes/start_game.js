Session.setDefault('qustOrder', 1);
Session.setDefault('oderPlay', 1);
Session.setDefault('playView', 'Ing');
Session.setDefault('gameSeason', '士是非飞1');
Session.setDefault('blueBu', 0);
Session.setDefault('redBu', 0);
Session.setDefault('redscore', 0);
Session.setDefault('bluescore', 0);
Session.setDefault('redright', 0);
Session.setDefault('redwrong', 0);
Session.setDefault('blueright', 0);
Session.setDefault('bluewrong', 0);
Session.setDefault('yaojiangsuiji', 176);
Session.setDefault('countdownR', 0);
Session.setDefault('countdownB', 0);
Session.setDefault('countdownN', 6);
Session.setDefault('qiangdaR', 0);
Session.setDefault('qiangdaB', 0);
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
