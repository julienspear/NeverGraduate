Template.gameMaster.events({
  "click #start-game1": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('qustOrder', Session.get('qustOrder') + 1);
  }
});

Template.gameMaster.helpers({
  itemBank: function () {
    var newOrder = String(Session.get('qustOrder'));
    var newEp = String(Session.get('gameEp'));
    return ItemBank.find({episode: newEp, order: newOrder});
  }
});
