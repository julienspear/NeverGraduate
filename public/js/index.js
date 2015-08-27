$(document).ready(function()
{
  $('.countDownContainer').css('opacity','0');
});

$(function(){

  countDown.init();

  //go through all the valid elements
  for (var i=0;i<countDown.validElements.length;i++)
  {
    //change this elements time
    countDown.changeTime(countDown.validElements[i],countDown.endDate[i],i);

  };

  //function to be called every whole second.
  setInterval(function(){

    //go through all the valid elements
    for (var i=0;i<countDown.validElements.length;i++)
    {
      //change this elements time
      countDown.changeTime(countDown.validElements[i],countDown.endDate[i],i);

    };

  },1000);

  $('.countDownContainer').animate({'opacity':1},1000);
});

var countDown = {

  //used to contain all the end dates of the correlating valid elements with the same index.
  endDate : [],
  validElements : [],

  //used to contain the last and next time.
  display : [],

  initialHeight : undefined,
  initialInnerDivMarginTop : undefined,
  originalBorderTopStyle : undefined,

  init : function(element,number)
  {
    //Go through all the elements with a class of countDown on
    $('.countDown').each(function(index){

      //regular expression match for ' 00/00/0000 00:00:00 '
      var regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);

      //if the the date format inside the element is invalid
      if(regex_match == null){

          //create a message for people in staging
          $(this).css({

            'color' : 'red',
            'font-size' : 24,
            'font-weight' : 'bold',
            'text-transform' : 'uppercase',
            'text-decoration' : 'underline',
            'line-height' : '30px'

          });

          $(this).text("Please ensure your count down date is in the correct format of 00/00/0000 00:00:00");

      }else{

        //push the current element into the validElements array
        countDown.validElements.push($(this));

        //use the date to create a Date object
        var end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);

        if(end > new Date()){

          //push this new date object of "end" into the endDate array
          countDown.endDate.push(end);

          //change the element to show the time rather than the date thats currently in it.
          countDown.changeTime($(this),end,index);

          $(this).html("");

          for (var i=0;i<countDown.display.next.length;i++)
          {
            if(i == countDown.display.next.length -1)
            {
              //element.text(element.text() + display.next[i] + " : ");
              $(this).append("<div class='container'><div class='a'><div>" + countDown.display.next[i] + "</div></div><div class='b'>" + countDown.display.last[i] + "</div></div>");
            }else{
              //element.text(element.text() + display.next[i] + " : ");
              $(this).append("<div class='container'><div class='a'><div>" + countDown.display.next[i] + "</div></div><div class='b'>" + countDown.display.last[i] + "</div></div><div class='separator'></div>");
            }
          }

          //place element2 under element 1 with minus margin
          $(this).find('div.container div.b').css('margin-top', -$(this).find('div.container div.b').height());

          //grab initial properties for reversions
          countDown.initialHeight = $(this).find('div.container div.a').height();
          countDown.initialInnerDivMarginTop = parseInt($(this).find('div.container div.a').find('div').css('margin-top'));
          countDown.originalBorderTopStyle = $(this).find('div.container div.a').css('border-top');

        }else{

          $(this).html('<div class="countDownGone"><div class="container"><div class="a"><div>00</div></div></div><div class="separator"></div><div class="container"><div class="a"><div>00</div></div></div><div class="separator"></div><div class="container" style=""><div class="a"><div>00</div></div></div><div class="separator"></div><div class="container"><div class="a"><div>00</div></div></div></div>');
        }
      }

    });

  },

  reset : function(element,number)
  {
    //grab the two divs inside of the container (element)
    var element1 = element.find('div.a');
    var element2 = element.find('div.b');
  },

  doFlip : function(element,number,lastNumber)
  {
    var element1 = $(element).find('div.a');

    //change elements to have the last and next number in.
    element1.find('div').text(lastNumber)
            .removeClass('not-lightened')
            .addClass('lighten');

    setTimeout(function(){

      element1.find('div').removeClass('lighten')
                          .addClass('not-lightened');

    },500);

  },

  changeTime : function(element, endTime, elementIndex)
  {
    var today = new Date();

      //if end time hasnt passed yet
    if(today.getTime() <= endTime.getTime())
    {
      //get the current date/time
      today = new Date();

      //object for the display
      countDown.display =
      {
        'last' : [],
        'next' : []
      };

      //find the difference in seconds from the end time and the time now
      var seconds = Math.floor((endTime.getTime() - today.getTime()) / 1000)+1;

      //work out the time with the difference and push into its passed in array
      countDown.display.last = countDown.calcTime(seconds);

      //reset the variable to the difference in seconds from the end time and the time now
      seconds = Math.floor((endTime.getTime() - today.getTime()) / 1000);

      //work out the time with the difference and push into its passed in array
      countDown.display.next = countDown.calcTime(seconds);

      //go through and recreate the containers and layering divs
      for (var i=0;i<countDown.display.next.length;i++)
      {

        //if it consists of only 1 character
        if(countDown.display.next[i].toString().length == 1){

          //prepend a "0" to this display (turns "1" into "01")
          countDown.display.next[i] = '0' + countDown.display.next[i];

        }
        //if it consists of only 1 character
        if(countDown.display.last[i].toString().length == 1){

          //prepend a "0" to this display (turns "1" into "01")
          countDown.display.last[i] = '0' + countDown.display.last[i];

        }
        $(element.find('div.container')).css('margin-top',"5px !important");
        $(element.find('div.container div.a div')[i]).text(countDown.display.last[i]);
        $(element.find('div.container div.b')[i]).text(countDown.display.next[i]);

        // re initialize the elements we just recreated
        countDown.reset(element.find('div.container'));

        // if the number is about to change.
        if(countDown.display.next[i] != countDown.display.last[i]){

          //run the doFlip function which contains the animations etc.
          countDown.doFlip(element.find('div.container')[i],countDown.display.next[i],countDown.display.last[i]);

        }

      }

    }else{

      //dont show anything if the date has passed.
      element.text("");

    }

  },

  calcTime : function(seconds)
  {
    var array = [];
      //find amount of days in the amount of seconds
    array[0] = Math.floor(seconds / 86400);
      //minus that from the seconds variable
    seconds -= array[0] * 86400; //seconds in a day
      //find amount of hours in the amount of seconds left after days has been taken away
    array[1] = Math.floor(seconds / 3600);
      //minus that from the seconds variable
    seconds -= array[1] * 3600; //seconds in an hour
      //find amount of minutes in the amount of seconds left after days and hours has been taken away
    array[2] = Math.floor(seconds / 60);
      //minus that from the seconds variable
    seconds -= array[2] * 60;
      //put the seconds variable into the array
    array[3] = seconds;

    return [array[0],array[1],array[2],array[3]];
  }
}
