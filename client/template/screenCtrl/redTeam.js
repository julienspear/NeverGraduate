Template.redTeam.helpers({
  redScore: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var redscore = settingInn.redscore;
    return redscore;
  },
  redLo: function () {
  return Session.get("redBu");
  },
});
