Template.allItem.helpers({
    itemBank: function () {
    return ItemBank.find({}, {sort: {createdAt: -1}});
  }
});
