Template.replyQust.helpers({
  itemBank: function () {
  return ItemBank.findOne({active: 1});
  }
});
