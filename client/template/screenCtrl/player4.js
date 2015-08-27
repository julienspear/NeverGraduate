Template.player4.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
  qiangdaSS: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangdaSS = settingInn.qiangdaL;
    return qiangdaSS == 1;
  },
});


Template.player4.events({
  "click #qiangdap4": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP4: playerT, createdAt: new Date()}});
  },
});
