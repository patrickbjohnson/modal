//   // pop up on page load
  // form submission stuff
  $('#somablack-modal').modal('show'); 
  $('#sb-form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      cache: false,
      dataType: 'json'
    }).done(function(data){
      if (data.result === 'error'){
        $('#sb-form .form-result').addClass('form-error').html('Woops, looks like there is an error. Double check and try again!').fadeIn('slow');
      } else {
        $('#sb-form .form-result').addClass('form-success').html('This is a success message.').fadeIn('slow');
      }
    }).fail(function(data){
        $('#sb-form .form-result').addClass('form-error').html('This is a server error message.').fadeIn('slow');
    });
  });