$(document).ready(function() {
  var values = {'firstNumber': [], 'secondNumber': [], 'operation': ''};//store clicked events

  // event listeners
  $('#calculator-pad').on('click', '.number', function() {//store and display clicked numbers
    if (values.operation == '') {//if an operator (+,-,*,/) has not yet been clicked, then
    values.firstNumber.push($(this).data('id'));//store clicked numbers in first number array
    var displayNumber = '';//store concatenated firstNumbers
    for (var i = 0; i < values.firstNumber.length; i++) {//loop through firstNumber array and concatenate
    displayNumber = displayNumber + values.firstNumber[i];
    };
    $('.results').text(displayNumber);//display concatenated number in results field
  } else {
    values.secondNumber.push($(this).data('id'));//if an operator has already been clicked, same process as above, for secondNumber
    var displayNumber2 = '';
    for (var i = 0; i < values.secondNumber.length; i++) {
    displayNumber2 = displayNumber2 + values.secondNumber[i];
    };
    $('.results').text(displayNumber2);
  }
  });//Close the click function

  $('#calculator-pad').on('click', '.operator', function() {//store clicked operator
    values.operation = $(this).data('id');
  });//close the click function

  $('#calculator-pad').on('click', '.equals', function() {//post array of numbers and the chosen operator to server
    $.ajax({
      type: 'POST',
      url: '/calculations/' + values.operation,//concatenate url to choose path to correct operation
      data: values,
      success: function(response) {
          $('.results').text(response.number.toFixed(2));//display result of server-side calculations in "result"
      }//Close the success function
    })//Close the AJAX POST request
  });//close the click function

  $('#calculator-pad').on('click', '.clear', function() {//reset everything
    $('.results').text('0');
    values.firstNumber = [];
    values.secondNumber = [];
    values.operation = '';
  });//close the click function

});//Close the document ready function
