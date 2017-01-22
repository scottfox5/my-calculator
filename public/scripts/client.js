$(function(){

  $('button').not('#clear').click(calculate);
  $('#clear').click(clear);

});

function calculate (){

  event.preventDefault();// stop the browser from trying to navigate away from our page

  var xyCalc = {};
  xyCalc.x = $('input[name=x]').val();
  xyCalc.y = $('input[name=y]').val();
  xyCalc.operator = $(this).data('operator');

  switch (xyCalc.operator){
    case 'add':
        $.ajax({
          url: '/sum',
          type: 'POST',
          data:  xyCalc,
          success: appendDom,
        })
      break;
    case 'sub':
        $.ajax({
          url: '/sub',
          type: 'POST',
          data: xyCalc,
          success: appendDom,
        })
      break;
    case 'mul':
        $.ajax({
          url: '/mul',
          type: 'POST',
          data: xyCalc,
          success: appendDom,
        })
      break;
    case 'div':
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

function appendDom(data){
  //console.log(data)
  $("#result").append('<span>' + data.num + '</span>');
}

function clear () {
  $('form').find('input[type=number]').val('');
  $('span').empty();
}

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
