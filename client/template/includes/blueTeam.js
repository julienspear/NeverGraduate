Template.blueTeam.helpers({
  blueScore: function () {
    return Session.get("bluescore");
  },
  blueLo: function () {
    return Session.get("blueBu");
  },
  blueR: function () {
    return Session.get("blueright");
  },
  blueW: function () {
    return Session.get("bluewrong");
  },

});
