Template.blueTeamC.helpers({
  blueR: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var blueR = settingInn.bluerightC;
    return blueR;
  },
  blueW: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var blueW = settingInn.bluewrongC;
    return blueW;
  }
});
