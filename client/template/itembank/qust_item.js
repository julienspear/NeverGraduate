Template.qustItem.events({
  "click .delete": function () {
    ItemBank.remove(this._id);
  },

  "submit #update-item": function () {
    var season = event.target.season.value;
    var episode = event.target.episode.value;
    var order = event.target.order.value;
    var qustIndx = event.target.qustIndx.value;
    var question = event.target.question.value;
    var inlineImage = event.target.inlineImage.value;
    var optionA = event.target.optionA.value;
    var optionB = event.target.optionB.value;
    var optionC = event.target.optionC.value;
    var optionD = event.target.optionD.value;
    var answer = event.target.answer.value;
    var parse = event.target.parse.value;
    var parseImage = event.target.parseImage.value;
    var countdown = event.target.countdown.value;

    ItemBank.update(this._id, {$set:{
      season: season,
      episode: episode,
      order: order,
      qustIndx: qustIndx,
      question: question,
      inlineImage: inlineImage,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      answer: answer,
      parse: parse,
      parseImage: parseImage,
      countdown: countdown,
      createdAt: new Date() // current time
      }}
    );
    return false;
  }
});
