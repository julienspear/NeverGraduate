Template.gameMaster.events({
  "click #start-game1": function () {
    ItemBank.update(this._id, {$set: {active: 0}});
    Session.set('qustOrder', Session.get('qustOrder') + 1);
  }
});

Template.gameMaster.helpers({
  itemBank: function () {
    var newSeason = String(Session.get('gameSeason'));
    var newOrder = String(Session.get('qustOrder'));
    return ItemBank.find({season: newSeason, order: newOrder});
  }
});
