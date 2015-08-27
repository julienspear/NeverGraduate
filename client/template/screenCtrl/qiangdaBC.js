Template.qiangdaBC.helpers({
  qiangp3: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangpp3= settingInn.qiangdaP3;
    return qiangpp3 == 1;
  },
  qiangp4: function () {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var qiangpp4= settingInn.qiangdaP4;
    return qiangpp4 == 1;
  },
});
