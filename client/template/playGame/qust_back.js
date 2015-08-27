Template.qustBack.events({
  "click #start-game": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('qustOrder', Session.get('qustOrder') + 1);
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {right:"G"}});
  },
  "click #change-qust": function () {
    ItemBank.update(this._id, {$set: {active: 1}});
    Session.set('gradeScore', Session.get('gradeScore1'));
  },
  "click #rightAns": function () {
    var rightAnser = this.answer;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {right:rightAnser}});
  }
});
