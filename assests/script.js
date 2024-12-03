$(document).ready(function() {
  // Mouse Enter/Leave: Highlight with addClass/removeClass
  $('.container').on('mouseenter', function() {
    $(this).addClass('highlight');
  }).on('mouseleave', function() {
    $(this).removeClass('highlight');
  });

  // Key press events and dynamic messaging
  $('input').each(function() {
    const inputId = $(this).attr('id');
    const messageId = `typingMessage${inputId}`;
    const typingMessage = $(`#${messageId}`);

    $(this).on('input', function() {
      typingMessage.show().text('Typing...');
      clearTimeout(this[inputId + 'Timeout']);
      this[inputId + 'Timeout'] = setTimeout(() => {
        typingMessage.hide();
      }, 2000);
    });
  });

  // Show/Hide Buttons (Toggle Visibility)
  $("#showLogin").click(function() {
    $("#loginSection").show();
    $("#signupSection").hide();
  });

  $("#showSignup").click(function() {
    $("#signupSection").show();
    $("#loginSection").hide();
  });

  // Initial hide
  $("#loginSection").hide();
  $("#signupSection").hide();

 
  validateInput('#email', '#emailFeedback');
  validateInput('#email2', '#emailFeedback2');


  function validateInput(inputSelector, feedbackSelector) {
    $(inputSelector).on('input', function() {
      const value = $(this).val();
      const feedback = $(feedbackSelector);
      if (value && isValidEmail(value)) {
        feedback.text('Email format is valid').css('color', 'green');
      } else if (value) {
        feedback.text('Invalid email format').css('color', 'red');
      } else {
        feedback.text('').css('color', ''); 
      }
    });
  }



  function isValidEmail(email) {
    
    return /\S+@\S+\.\S+/.test(email);
  }
});