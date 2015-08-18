Session.setDefault('blueBu', 0);
Session.setDefault('redBu', 0);

Template.daping.events({
  /*  "click .topFace": function() {
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $("div#1 .topFace").addClass("topFaceBlue");
   $(".rightFace").addClass(animationName).one(animationend, function() {
        $(this).removeClass(animationName);
     });
  }，*/

  "click #cubeblue1": function() {
      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlueC= "div#"+Session.get('blueBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectBlueC).removeClass("cubeAct");
      $(selectBlue).removeClass("topFaceBlue");

      Session.set('blueBu', Session.get('blueBu') + 1);

      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlueC= "div#"+Session.get('blueBu');

      $(selectBlue).addClass("topFaceBlue");
      $(selectBlueC).addClass("cubeAct");
      $(selectBlueC).addClass(animationName).one(animationend, function() {
           $(this).removeClass(animationName);
        });
  },

  "click #cubeblue2": function() {
      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlueC= "div#"+Session.get('blueBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectBlueC).removeClass("cubeAct");
      $(selectBlue).removeClass("topFaceBlue");

      Session.set('blueBu', Session.get('blueBu') - 1);

      var selectBlue= "div#"+Session.get('blueBu')+" .topFace";
      var selectBlueC= "div#"+Session.get('blueBu');

      $(selectBlue).addClass("topFaceBlue");
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
      var selectred= "div#"+Session.get('redBu')+" .leftFace";
      var selectred1= "div#"+Session.get('redBu')+" .rightFace";
      var selectredC= "div#"+Session.get('redBu');
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(selectredC).removeClass("cubeAct");
      $(selectred1).removeClass("rightFaceRed");
      $(selectred).removeClass("leftFaceRed");

      Session.set('redBu', Session.get('redBu') - 1);

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

});
