Template.scoreItem.events({
  "click #grad-pl": function () {
      if (this.rightOrFalse == "right") {
        var gradePlayer = Session.get('gradeScore');
        Session.set('gradeScore', Session.get('gradeScore') - 1);
      }
      else {
        var gradePlayer = 0;
      }

    GlblSet.upsert(this._id,{$set:{
      gradPl: gradePlayer,
      anserLight: null,
      playerAnser: null,
      anserLight: null,
      rightAnser: null,
      rightOrFalse: null,
      playerIngOrEd: "ing"
      }
    });

    GlblSet.upsert(this._id,{$inc:{
      totalScore: gradePlayer
      }
    });
  }
});
