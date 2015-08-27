Template.anserQust1.helpers({
  itemBank: function () {
    return ItemBank.find({active: 1});
  },
  cNo: function () {
    return this.optionC = null;
  },
  dNo: function () {
    return this.optionD === null;
  },
  aY: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var rightAn = settingInn.right;
  return rightAn == "A";
  },
  bY: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var rightAn = settingInn.right;
  return rightAn == "B";
  },
  cY: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var rightAn = settingInn.right;
  return rightAn == "C";
  },

  dY: function () {
  var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
  var rightAn = settingInn.right;
  return rightAn == "D";
  },
});
