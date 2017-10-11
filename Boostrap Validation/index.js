
    // CIS 131 - W01
    // Boostrap Validation
    // index.js
    //
    // James McAdoo
    // 10/08/17

    var errorMessage = document.getElementById('error');

    function submitForm() {
      resetPageErrors();

      var fields_entered = checkBlanks();
      if(fields_entered == false) {
        errorMessage.innerHTML = "required fields are missing";
        errorMessage.style.display = 'block';

        return false;
      }

      var name_valid = checkName();
      if(name_valid == false) {
        errorMessage.innerHTML = "Name must be at least 6 characters.";
        errorMessage.style.display = 'block';

        return false
      }

      var phone_valid = checkPhoneNumber();
      if(phone_valid == false) {
        errorMessage.innerHTML = "Please enter a valid phone number.";
        errorMessage.style.display = 'block';

        return false
      }

      var email_valid = checkEmail();
      if(email_valid == false) {
        errorMessage.innerHTML = "Please enter a valid email.";
        errorMessage.style.display = 'block';

        return false
      }

      var radio_checked = checkRadio();
      if(radio_checked == false) {
        errorMessage.innerHTML = "Please select how you heard about us.";
        errorMessage.style.display = 'block';

        return false
      }

      return true;
    }

    function resetPageErrors() {
      errorMessage.style.display = 'none';
      document.getElementById('name').style.backgroundColor = "white";
      document.getElementById('email').style.backgroundColor = "white";
      document.getElementById('phone').style.backgroundColor = "white";
    }

    function checkBlanks() {
      var nameBlank = document.getElementById('name').value == ""
      var emailBlank = document.getElementById('email').value == ""
      if (nameBlank && emailBlank) {
        document.getElementById('name').style.backgroundColor = "#fba3b4";
        document.getElementById('email').style.backgroundColor = "#fba3b4";
        return false;
      }
      if (nameBlank) {
        document.getElementById('name').style.backgroundColor = "#fba3b4";
        return false;
      }

      if(emailBlank) {
        document.getElementById('email').style.backgroundColor = "#fba3b4";
        return false;
      }
      return true;
    }

    function checkName() {
      if (document.getElementById('name').value.length < 6) {
        document.getElementById('name').style.backgroundColor = "#fba3b4";
        return false;
      }
      return true;
    }

    function checkPhoneNumber() {
      var phPattern = /\d{10}|\d{7}/;
      var result = phPattern.test(document.getElementById('phone').value);

      if(!result) {
        document.getElementById('phone').style.backgroundColor = "#fba3b4";
        return false;
      }
      return true;
    }

    function checkEmail() {
      var input = document.getElementById('email').value;
      var ePattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (ePattern.test(input) == false) {
        document.getElementById('email').style.backgroundColor = "#fba3b4";
        return false;
      }

      return true;
    }

    function checkRadio() {
      var radioOne = document.getElementById('radio1').checked;
      var radioTwo = document.getElementById('radio2').checked;
      var radioThree = document.getElementById('radio3').checked;
      var radioFour = document.getElementById('radio4').checked;

      if (radioOne == false && radioTwo == false &&
          radioThree == false && radioFour == false){
              return false;
          }

      return true;
    }

    function parseUrlForVariable() {
     var parameters = window.location.search.substring(1);
     var splitParams = parameters.split(/&|=/);
    //  var spltParamSplits = splitParams.split('=');
    document.getElementById('info').innerHTML = splitParams[0];
     }
