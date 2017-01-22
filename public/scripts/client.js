$(function(){
  // different buttons to handle each operator
  // $('#add').click(add);
  // $('#sub').click(subtract);
  // $('#mul').click(multiply);
  // $('#div').click(divide);
  $('.operator').click(calculate);
  $('#clear').click(clear);

});

function calculate (){
  var buttonPressed = $(this).html();

  event.preventDefault();// stop the browser from trying to navigate away from our page
  var formData = $('form').serializeArray();// get the information out of the form
  var xyCalc = {}
  xyCalc.x = formData[0].value;
  xyCalc.y = formData[1].value;

  if (buttonPressed == '+') {
    xyCalc.operator = 'add';
  } else if (buttonPressed == '-') {
    xyCalc.operator = 'sub';
  } else if (buttonPressed == '*') {
    xyCalc.operator = 'mul';
  } else if (buttonPressed == '/') {
    xyCalc.operator = 'div';
  } else {
    clear();
  }

  $.ajax({
    url: '/calc',
    type: 'POST',
    data:  xyCalc,
    success: appendDom,
  })

}



//// four different functions to handle each operator click
// function add (){
//
//   event.preventDefault();// stop the browser from trying to navigate away from our page
//   var formData = $('form').serialize();// get the information out of the form
//   var xyCalc = {}
//
//   $.ajax({
//     url: '/sum',
//     type: 'POST',
//     data:  xyCalc,
//     success: appendDom,
//   })
//
// }
//
// function subtract (){
//
//   event.preventDefault();// stop the browser from trying to navigate away from our page
//   var xyCalc = $('form').serialize();// get the information out of the form
//   console.log(xyCalc);
//
//   $.ajax({
//     url: '/sub',
//     type: 'POST',
//     data: xyCalc,
//     success: appendDom,
//   })
// }
//
// function multiply (){
//
//   event.preventDefault();// stop the browser from trying to navigate away from our page
//   var xyCalc = $('form').serialize();// get the information out of the form
//   console.log(xyCalc);
//
//   $.ajax({
//     url: '/mul',
//     type: 'POST',
//     data: xyCalc,
//     success: appendDom,
//   })
//
// }
//
// function divide (){
//
//   event.preventDefault();// stop the browser from trying to navigate away from our page
//   var xyCalc = $('form').serialize();// get the information out of the form
//   console.log(xyCalc);
//
//
//   $.ajax({
//     url: '/div',
//     type: 'POST',
//     data: xyCalc,
//     success: appendDom
//   })
//
// }

function appendDom(data){
  console.log(data)
  $("#result").append('<span>' + data.num + '</span>');
}

function clear () {
  $('form').find('input[type=number]').val('');
  $('span').empty();
}
