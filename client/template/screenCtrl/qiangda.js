Template.qiangdaR.helpers({
qiangp1: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var qiangpp1= settingInn.qiangdaP1;
  return qiangpp1 == 1;
},
qiangp2: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var qiangpp2= settingInn.qiangdaP2;
  return qiangpp2 == 1;
},
});
