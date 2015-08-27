Template.player1.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
  qiangdaSS: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangdaSS = settingInn.qiangdaL;
    return qiangdaSS == 1;
  },
});


Template.player1.events({
  "click #qiangdap1": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP1: playerT, createdAt: new Date()}});
  },
});
