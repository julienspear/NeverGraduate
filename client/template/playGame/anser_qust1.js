Template.anserQust1.events({
  "submit #reply-qust": function () {
    Session.set('playView', 'Ed');
    var playerAnser = event.target.optionsRadios.value;
    var player = Meteor.user();
    var playerName = player.username;
    var playerId = Meteor.userId();
    var rightAnser = this.answer;
    if (playerAnser == rightAnser)
      {
      var rightOrFalse = "right";
      }
    else
      {
      var rightOrFalse = "wrong";
      }

    GlblSet.upsert(playerId, {$set:{
      playerName: playerName,
      playerAnser: playerAnser,
      anserLight: "on",
      rightAnser: rightAnser,
      rightOrFalse: rightOrFalse,
      playerIngOrEd: "ed",
      createdAt: new Date()
    }});

  event.target.optionsRadios.value = "";

  }
});

Template.anserQust1.helpers({
  itemBank: function () {
    return ItemBank.find({active: 1});
  },
  inImage: function () {
    return this.inlineImage == "1";
  },
  imageIn: function() {
    var imgIdtem = this.qustIndx;
    var imgIdtemp = imgIdtem.slice(1);
    var imgId = "/images/img" + imgIdtemp + ".png";
    return imgId;
  }
});
