Meteor.publish('itemBank', function() {
  return ItemBank.find();
});
Meteor.publish('playSore', function() {
  return PlaySore.find();
});
Meteor.publish('glblSet', function() {
  return GlblSet.find();
});
