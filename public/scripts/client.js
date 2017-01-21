$(function(){
  // different buttons to handle each operator
  $('#calcForm').on('click', '#add', add);
  $('#calcForm').on('click', '#sub', subtract);
  $('#calcForm').on('click', '#mul', multiply);
  $('#calcForm').on('click', '#div', divide);
  $('#clear').click(clear);

});

function add (){

  event.preventDefault();// stop the browser from trying to navigate away from our page
  var xyCalc = $('form').serialize();// get the information out of the form
  console.log(xyCalc);

  $.ajax({
    url: '/sum',
    type: 'POST',
    data:  xyCalc ,
    success: appendDom,
  })

}


function subtract (){

  event.preventDefault();// stop the browser from trying to navigate away from our page
  var xyCalc = $('form').serialize();// get the information out of the form
  console.log(xyCalc);

  $.ajax({
    url: '/sub',
    type: 'POST',
    data: xyCalc,
    success: appendDom,
  })
}

function multiply (){

  event.preventDefault();// stop the browser from trying to navigate away from our page
  var xyCalc = $('form').serialize();// get the information out of the form
  console.log(xyCalc);

  $.ajax({
    url: '/mul',
    type: 'POST',
    data: xyCalc,
    success: appendDom,
  })

}

function divide (){

  event.preventDefault();// stop the browser from trying to navigate away from our page
  var xyCalc = $('form').serialize();// get the information out of the form
  console.log(xyCalc);

  $.ajax({
    url: '/div',
    type: 'POST',
    data: xyCalc,
    success: appendDom
  })

}

function appendDom(data){
  console.log(data)
  $("#result").append('<span>' + data.num + '</span>');
}

function clear () {
  $('form').find('input[type=number]').val('');
  $('span').empty();
}
