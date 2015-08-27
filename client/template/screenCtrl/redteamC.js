Template.redTeamC.helpers({
  redR: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var redR = settingInn.redrightC;
    return redR;
  },
  redW: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var redW = settingInn.redwrongC;
    return redW;
  }
});
