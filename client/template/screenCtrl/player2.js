Template.player2.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
  qiangdaSS: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangdaSS = settingInn.qiangdaL;
    return qiangdaSS == 1;
  },
});


Template.player2.events({
  "click #qiangdap2": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP2: playerT, createdAt: new Date()}});
  },
});
