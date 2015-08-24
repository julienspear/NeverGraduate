Session.setDefault('blueBu', 0);
Session.setDefault('redBu', 0);
Session.setDefault('redscore', 0);
Session.setDefault('bluescore', 0);
Session.setDefault('redright', 0);
Session.setDefault('redwrong', 0);
Session.setDefault('blueright', 0);
Session.setDefault('bluewrong', 0);
Session.setDefault('yaojiangsuiji', 176);

/*Template.daping.helpers({
  glblSet: function() {
    return GlblSet.find();
  },
});
Template.daping..onRendered(function () {
  // Use the Packery jQuery plugin
  this.$('.container').packery({
    itemSelector: '.item',
    gutter: 10
  });
});*/


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
          /*GlblSet.update({playsetting: "playerScore"}, {
            $set: {redscore: 20},
            createdAt: new Date()
          },true);
      },*/
    Session.set('redscore', Session.get('redscore') + 20);
  },

  "click #red50": function() {
    Session.set('redscore', Session.get('redscore') + 50);
  },

  "click #red100": function() {
    Session.set('redscore', Session.get('redscore') + 100);
  },

  "click #red200": function() {
    Session.set('redscore', Session.get('redscore') + 200);
  },

  "click #red2d": function() {
    Session.set('redscore', Session.get('redscore') * 2);
  },

  "click #red2s": function() {
    Session.set('redscore', Session.get('redscore') / 2);
  },

  "click #red0": function() {
    Session.set('redscore', 0);
  },

  "click #redright": function() {
    Session.set('redright', Session.get('redright') + 1);
  },
  "click #redwrong": function() {
    Session.set('redwrong', Session.get('redwrong') + 1);
  },
  "click #reda0": function() {
    Session.set('redright', 0);
    Session.set('redwrong', 0);
  },

  "click #blue20": function() {
        /*GlblSet.update({playsetting: "playerScore"}, {
          $set: {bluescore: 20},
          createdAt: new Date()
        },true);
    },*/
  Session.set('bluescore', Session.get('bluescore') + 20);
  },

  "click #blue50": function() {
  Session.set('bluescore', Session.get('bluescore') + 50);
  },

  "click #blue100": function() {
  Session.set('bluescore', Session.get('bluescore') + 100);
  },

  "click #blue200": function() {
  Session.set('bluescore', Session.get('bluescore') + 200);
  },

  "click #blue2d": function() {
  Session.set('bluescore', Session.get('bluescore') * 2);
  },

  "click #blue2s": function() {
  Session.set('bluescore', Session.get('bluescore') / 2);
  },

  "click #blue0": function() {
  Session.set('bluescore', 0);
  },

  "click #blueright": function() {
    Session.set('blueright', Session.get('blueright') + 1);
  },
  "click #bluewrong": function() {
    Session.set('bluewrong', Session.get('bluewrong') + 1);
  },
  "click #bluea0": function() {
    Session.set('blueright', 0);
    Session.set('bluewrong', 0);
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
});
