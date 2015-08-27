Template.player3.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
  qiangdaSS: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangdaSS = settingInn.qiangdaL;
    return qiangdaSS == 1;
  },
});


Template.player3.events({
  "click #qiangdap3": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP3: playerT, createdAt: new Date()}});
  },
});
