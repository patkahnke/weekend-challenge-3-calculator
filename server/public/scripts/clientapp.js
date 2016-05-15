$(document).ready(function() {
  var values = {'firstNumber': [], 'secondNumber': [], 'operation': ''};

  // event listeners
  $('#calculator-pad').on('click', '.number', function() {
    if (values.operation == '') {
    values.firstNumber.push($(this).data('id'));
  } else {
    values.secondNumber.push($(this).data('id'));
  }
  });//Close the click function

  $('#calculator-pad').on('click', '.operator', function() {
    values.operation = $(this).data('id');
    console.log(values.operation);
    console.log(values);
  });//close the click function

  $('#calculator-pad').on('click', '.equals', function() {
    $.ajax({
      type: 'POST',
      url: '/calculations/' + values.operation,
      data: values,
      success: function(response) {
          $('#results').text(response.number);
      }//Close the success function
    })//Close the AJAX POST request
  });//close the click function

  $('#calculator-pad').on('click', '.clear', function() {
    $('#results').text('0');
    values.firstNumber = [];
    values.secondNumber = [];
    values.operation = '';
  });//close the click function

  function storeNumberInputs(button) {
    if (values.operation == '') {
    values.firstNumber.push($(button).data('id'));
  } else {
    values.secondNumber.push($(button).data('id'));
  }
  }

});//Close the document ready function
