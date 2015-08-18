Session.setDefault('searchEp', '');
Session.setDefault('searchKS', '');
Session.setDefault('orderK', '');
Session.setDefault('orderA', '');

Template.qustList.events({
  'keyup #searchEpisode': function() {
    Session.set('searchEp', $('#searchEpisode').val());
  },
  'keyup #searchKeyStr': function() {
    Session.set('searchKS', $('#searchKeyStr').val());
  },
  'onchange #orderKey': function() {
    Session.set('orderK', $('#orderKey').val());
  },
  'onchange #orderArr': function() {
    Session.set('orderA', $('#orderArr').val());
  },
});


Template.qustList.helpers({
  itemBank: function () {
  <!-- return ItemBank.find({order: Session.get('searchEp')}, {sort: {"Session.get('orderK')": Session.get('orderA') }}); -->
  return ItemBank.find({season: Session.get('searchEp'),order: Session.get('searchKS')}, {sort: {order: 1}});

  }
});
