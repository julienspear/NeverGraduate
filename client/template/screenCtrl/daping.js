Template.daping.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
  countdownB: function () {
    var countdownB = Session.get('countdownB');
    return countdownB == 1;
  },
  qiangdaB: function () {
    var qiangdaB= Session.get('qiangdaB');
    return qiangdaB == 1;
  },
  countdownR: function () {
    var countdownR = Session.get('countdownR');
    return countdownR == 1;
  },
  qiangdaC: function () {
    var qiangdaC = Session.get('qiangdaR');
    return qiangdaC == 1;
  },
});


Template.daping.events({
  "click #cubeblue1": function() {
      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlue1= "div#"+Session.get('blueBu')+" .bottonFace";
      var selectBlueC= "div#"+Session.get('blueBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectBlueC).removeClass("cubeAct");
      $(selectBlue).removeClass("topFaceBlue");
      $(selectBlue1).removeClass("bottonFaceBlue");

      Session.set('blueBu', Session.get('blueBu') + 1);

      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlue1= "div#"+Session.get('blueBu')+" .bottonFace";
      var selectBlueC= "div#"+Session.get('blueBu');

      $(selectBlue).addClass("topFaceBlue");
      $(selectBlue1).addClass("bottonFaceBlue");
      $(selectBlueC).addClass("cubeAct");
      $(selectBlueC).addClass(animationName).one(animationend, function() {
           $(this).removeClass(animationName);
        });
  },

  "click #cubeblue2": function() {
    var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
    var selectBlue1= "div#"+Session.get('blueBu')+" .bottonFace";
    var selectBlueC= "div#"+Session.get('blueBu');
    var animationName = 'animated shake';
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(selectBlueC).removeClass("cubeAct");
    $(selectBlue).removeClass("topFaceBlue");
    $(selectBlue1).removeClass("bottonFaceBlue");

    Session.set('blueBu', Session.get('blueBu') - 1);

    var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
    var selectBlue1= "div#"+Session.get('blueBu')+" .bottonFace";
    var selectBlueC= "div#"+Session.get('blueBu');

    $(selectBlue).addClass("topFaceBlue");
    $(selectBlue1).addClass("bottonFaceBlue");
    $(selectBlueC).addClass("cubeAct");
    $(selectBlueC).addClass(animationName).one(animationend, function() {
         $(this).removeClass(animationName);
     });
  },

  "click #cubered1": function() {
      var selectred= "div#"+Session.get('redBu')+" .leftFace";
      var selectred1= "div#"+Session.get('redBu')+" .rightFace";
      var selectredC= "div#"+Session.get('redBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectredC).removeClass("cubeAct");
      $(selectred1).removeClass("rightFaceRed");
      $(selectred).removeClass("leftFaceRed");

      Session.set('redBu', Session.get('redBu') + 1);

      var selectred= "div#"+Session.get('redBu')+" .leftFace";
      var selectred1= "div#"+Session.get('redBu')+" .rightFace";
      var selectredC= "div#"+Session.get('redBu');

      $(selectred).addClass("leftFaceRed");
      $(selectred1).addClass("rightFaceRed");
      $(selectredC).addClass("cubeAct");
      $(selectredC).addClass(animationName).one(animationend, function() {
           $(this).removeClass(animationName);
        });
  },


  "click #cubered2": function() {
      var selectred = "div#"+Session.get('redBu')+" .leftFace";
      var selectred1 = "div#"+Session.get('redBu')+" .rightFace";
      var selectredC = "div#"+Session.get('redBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectredC).removeClass("cubeAct");
      $(selectred1).removeClass("rightFaceRed");
      $(selectred).removeClass("leftFaceRed");

      Session.set('redBu', Session.get('redBu') - 1);

      var selectred = "div#"+Session.get('redBu')+" .leftFace";
      var selectred1 = "div#"+Session.get('redBu')+" .rightFace";
      var selectredC = "div#"+Session.get('redBu');

      $(selectred).addClass("leftFaceRed");
      $(selectred1).addClass("rightFaceRed");
      $(selectredC).addClass("cubeAct");
      $(selectredC).addClass(animationName).one(animationend, function() {
           $(this).removeClass(animationName);
        });
  },

  "click #red20": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redscore: 20}});
  },

  "click #red50": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redscore: 50}});
  },

  "click #red100": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redscore: 100}});
  },

  "click #red200": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redscore: 200}});
  },

  "click #red2d": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var redscoreT = settingInn.redscore * 2;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {redscore:redscoreT}});
  },

  "click #red2s": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var redscoreTt = settingInn.redscore / 2;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {redscore:redscoreTt}});
  },

  "click #red0": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {redscore: 0}});
  },

  "click #blue20": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluescore: 20}});
  },

  "click #blue50": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluescore: 50}});
  },

  "click #blue100": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluescore: 100}});
  },

  "click #blue200": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluescore: 200}});
  },

  "click #blue2d": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var bluescoreT = settingInn.bluescore * 2;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {bluescore: bluescoreT}});
  },

  "click #blue2s": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var bluescoreTt = settingInn.bluescore / 2;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {bluescore: bluescoreTt}});
  },

  "click #blue0": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {bluescore: 0}});
  },

  "click #countdownR": function() {
    $('div#redTeamC').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('countdownR', 1);}, 800) ;
    var fiveSeconds = new Date().getTime() + 5000;
   $('#getting-startedR').countdown(fiveSeconds, function(event) {
     $(this).html(event.strftime('%M:%S'));
   });
  },

  "click #zhanR": function() {
    $('div#contdownRT').addClass('animated flipOutX');
    $('div#qiangda').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('countdownR', 0);}, 800) ;
    Meteor.setTimeout(function() {return Session.set('qiangdaR', 0);}, 800) ;
  },

  "click #countdownB": function() {
    $('div#blueTeamC').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('countdownB', 1);}, 800) ;
    var fiveSeconds = new Date().getTime() + 5000;
   $('#getting-startedB').countdown(fiveSeconds, function(event) {
     $(this).html(event.strftime('%M:%S'));
   });
  },

  "click #zhanB": function() {
    $('div#contdownBT').addClass('animated flipOutX');
    $('div#qiangdaBS').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('countdownB', 0);}, 800) ;
    Meteor.setTimeout(function() {return Session.set('qiangdaB', 0);}, 800) ;
  },

  "click #redright": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redrightC: 1}});
  },
  "click #redwrong": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {redwrongC: 1}});
  },
  "click #reda0": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {redrightC: 0, redwrongC: 0}});
  },

  "click #blueright": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluerightC: 1}});
  },
  "click #bluewrong": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {bluewrongC: 1}});
  },
  "click #bluea0": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {bluerightC: 0, bluewrongC: 0}});
  },
  "click #yaojiang": function() {
    var animationName = 'animated swing';
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $("div .seventeen").addClass(animationName).one(animationend, function() {
         $(this).removeClass(animationName);
      });
      $("div #171").hide(50);
      $("div #172").hide(50);
      $("div #173").hide(50);
      $("div #174").hide(50);
      $("div #175").hide(50);
      $("div #176").hide(50);
      var rondonNum =  Math.ceil(Math.random()*6) + 170;
      Session.set('yaojiangsuiji', rondonNum);
      var selectjiang = "div#"+Session.get('yaojiangsuiji');
     $(selectjiang).show(50);
  },
  "click #qiangdaR": function() {
    $('div#redTeamC').addClass('animated flipOutX');
    $('div#contdownRT').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaR', 1);}, 800) ;
    Meteor.setTimeout(function() {return Session.set('countdown', 1);}, 800) ;
  },

  "click #qiangdaB": function() {
    $('div#blueTeamC').addClass('animated flipOutX');
    Meteor.setTimeout(function() {return Session.set('qiangdaB', 1);}, 800) ;
  },

  "click #qiangdap1": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP1: playerT, createdAt: new Date()}});
  },

  "click #qiangdap2": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT2 = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP2: playerT2, createdAt: new Date()}});
  },
  "click #qiangdap3": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT3 = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP3: playerT3, createdAt: new Date()}});
  },
  "click #qiangdap4": function() {
    var settingInn = GlblSet.findOne({_id: "coS2fsdrPYGQYc2zb"});
    var playerT4 = settingInn.qiangdaO;
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$inc: {qiangdaO: 1}, $set: {qiangdaP4: playerT4, createdAt: new Date()}});
  },
  "click #qiangdaStart": function() {
    GlblSet.update({_id: "coS2fsdrPYGQYc2zb"},{$set: {qiangdaO: 1, qiangdaP1: "未抢", qiangdaP2: "未抢", qiangdaP3: "未抢", qiangdaP4: "未抢", createdAt: new Date()}});
  },
});
