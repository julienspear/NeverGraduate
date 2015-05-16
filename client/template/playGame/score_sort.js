Template.scoreSort.helpers({
  glblSet: function () {
    return GlblSet.find({}, {sort: {"createdAt": 1}});
  }
});
