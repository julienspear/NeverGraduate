Template.gameMaster.events({
  "click #start-game": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('qustOrder', Session.get('qustOrder') + 1);
  },
  "click #change-qust": function () {
    ItemBank.update(this._id, {$set: {active: 1}});
  },
  "click #time-out": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('gradeScore', Session.get('gradeScore1'));
  },
});

Template.gameMaster.helpers({
   SettingS: function () {
    var newOrder = String(Session.get('qustOrder'));
    var newEp = Session.get('gameEp');
    return newOrder + newEp;
  },
  itemBank: function () {
    var newOrder = String(Session.get('qustOrder'));
    var newEp = String(Session.get('gameEp'));
    return ItemBank.find({episode: newEp, order: newOrder});
  }
});
