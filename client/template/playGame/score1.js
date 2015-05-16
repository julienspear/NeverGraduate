Template.score1.helpers({
  glblSet: function () {
    return GlblSet.find({}, {sort: {playName: -1}});
  },
  anLight: function () {
    return this.anserLight == "on";
  },
  playImage: function() {
    var playerNa = this.playerName;
    var playImage = "/players/" + playerNa + ".jpg";
    return playImage;
  },

});
