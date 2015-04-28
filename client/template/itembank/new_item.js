Template.newItem.events({
  "submit #new-item": function () {
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

    ItemBank.insert({
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
    });

    // Clear form
    event.target.order.value = "";
    event.target.qustIndx.value = "";
    event.target.question.value = "";
    event.target.inlineImage.value = "";
    event.target.optionA.value = "";
    event.target.optionB.value = "";
    event.target.optionC.value = "";
    event.target.optionD.value = "";
    event.target.answer.value = "";
    event.target.parse.value = "";
    event.target.parseImage.value = "";

    // Prevent default form submit
    return false;
  }
});
