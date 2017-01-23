$(function(){
  var xyCalc = {};
  var numX;
  var numY;
  var operator;

  $('#clear').click(clear); // when clear button is clicked, display is emptied

  $('.num').click(function(){ // when number button is clicked, that number is displayed on screen
    $('#display-box').append($(this).data('value'));
  })

  $('.operator').click(function(){ // when arithmetic operator is clicked
    operator = $(this).data('operator'); // it is stored in varialbe
    numX = $('#display-box').text(); // number on display is stored in variable
    $('#display-box').empty(); // display is emptied
  })

  $('#equal').click(function(){ // when equal button is clicked

    numY = $('#display-box').text(); // number on display is stored in variable
    $('#display-box').empty(); // display is emptied

    xyCalc.numX = numX; // storing first number as key of object
    xyCalc.numY = numY; // storing second number as key of object
    xyCalc.operator = operator; // storing arithmetic operator clicked as key of object

    calculate();
    function calculate (){
    // the arithmetic operator determines route to server, and thus the acton taken on those numbers
      switch (xyCalc.operator){
        case 'add':
            $.ajax({
              url: '/add', // route to server
              type: 'POST', // type of request
              data:  xyCalc, // object sent to server; which is 2 numbers and arithmetic operator
              success: appendDom,
            })
          break;
        case 'subtract':
            $.ajax({
              url: '/sub',
              type: 'POST',
              data: xyCalc,
              success: appendDom,
            })
          break;
        case 'multiply':
            $.ajax({
              url: '/mul',
              type: 'POST',
              data: xyCalc,
              success: appendDom,
            })
          break;
        case 'divide':
            $.ajax({
              url: '/div',
              type: 'POST',
              data: xyCalc,
              success: appendDom,
            })
          break;
        default:
         console.log('You broke it!');
      }
    }
  })
});

function appendDom(data){ // results of calulation are returned and appended to DOM
  $("#display-box").append('<span>' + data.num + '</span>');
}

function clear () { // this is the function to clear the display
  $('#display-box').empty();
}


// // this is code used for base assignment
// // builds object of two numbers and one operator and makes single post request
// function calculate (){
//
//   event.preventDefault();// stop the browser from trying to navigate away from our page
//
//   var xyCalc = {};
//   xyCalc.x = $('input[name=x]').val();
//   xyCalc.y = $('input[name=y]').val();
//   xyCalc.operator = $(this).data('operator');
//   console.log(xyCalc);
//
//       $.ajax({
//         url: '/calc',
//         type: 'POST',
//         data: xyCalc,
//         success: appendDom,
//       })
// }
