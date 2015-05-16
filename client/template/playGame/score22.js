Template.score22.helpers({
  glblSet: function () {
    return GlblSet.find({anserLight: "on"}, {sort: {createAt: 1}});
  },
  anRight: function () {
    return this.rightOrFalse == "right";
  },
  playImage: function() {
    var playerNa = this.playerName;
    var playImage = "/players/" + playerNa + ".jpg";
    return playImage;
  },

});
