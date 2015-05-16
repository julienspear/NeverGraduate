Template.score3.helpers({
  glblSet: function () {
    return GlblSet.find({}, {sort: {"totalScore": -1}});
  }
});
