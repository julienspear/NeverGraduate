Template.blueTeam.helpers({
  blueScore: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var bluescore = settingInn.bluescore;
    return bluescore;
  },
  blueLo: function () {
    return Session.get("blueBu");
  },
});
