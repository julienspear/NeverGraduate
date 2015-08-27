

Template.zcr.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
});


Template.zcr.events({
  "click #qiangdaStart": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {qiangdaO: 1, qiangdaL: 1, qiangdaP1: "未抢", qiangdaP2: "未抢", qiangdaP3: "未抢", qiangdaP4: "未抢", createdAt: new Date()}});
  },
  "click #qiangdaStop": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {qiangdaL: 6}});
  },
  "click #zhanR": function() {
    $('div#qiangda').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaR', 0);}, 800) ;
  },
  "click #zhanB": function() {
    $('div#qiangdaBS').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaB', 0);}, 800) ;
  },
  "click #qiangdaR": function() {
    $('div#redTeamC').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaR', 1);}, 800) ;
  },
  "click #qiangdaB": function() {
    $('div#blueTeamC').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaB', 1);}, 800) ;
  },
});
