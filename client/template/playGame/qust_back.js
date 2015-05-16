Template.qustBack.events({
  "click #start-game": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('qustOrder', Session.get('qustOrder') + 1);
  },
  "click #change-qust": function () {
    ItemBank.update(this._id, {$set: {active: 1}});
    Session.set('gradeScore', Session.get('gradeScore1'));
  }
});
