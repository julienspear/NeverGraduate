Template.redTeam.helpers({
  redScore: function () {
    return Session.get("redscore");
  },
  redLo: function () {
    return Session.get("redBu");
  },

  redR: function () {
    return Session.get("redright");
  },
  redW: function () {
    return Session.get("redwrong");
  },

});
