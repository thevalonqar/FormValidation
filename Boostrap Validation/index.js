
    // CIS 131 - W01
    // Boostrap Validation
    // index.js
    //
    // James McAdoo
    // 10/08/17

    var errorMessage = document.getElementById('error');

    function submitForm() {
      checkRadio();
      // checkName();
      checkEmail();
      checkPhoneNumber();
      checkBlanks();
    }

    function checkBlanks() {
      var n = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      if (n == "" ){
        errorMessage.innerHTML = "required fields are missing";
        errorMessage.style.display = 'block';
        document.getElementById('name').style.backgroundColor = "#fba3b4";
      }
      else {
        checkName();
        // errorMessage.style.display = 'none';
        // document.getElementById('name').style.backgroundColor = "white";
      }
        if (email == "" ){
          errorMessage.innerHTML = "required fields are missing";
          errorMessage.style.display = 'block';
          document.getElementById('email').style.backgroundColor = "#fba3b4";
        }
        else {
          errorMessage.style.display = 'none';
          document.getElementById('email').style.backgroundColor = "white";
        }

    }

    function checkName() {
      var string = document.getElementById('name').value;
      var nPattern = /.{6,}/;
      if(nPattern.test(string) == true){
        errorMessage.style.display = 'none';
        document.getElementById('name').style.backgroundColor = "white";

      }
      else{
          errorMessage.innerHTML = "Name must be at least 6 characters";
          errorMessage.style.display = 'block';
          document.getElementById('name').style.backgroundColor = "#fba3b4";
      }
    }

  function checkPhoneNumber() {
    var number = document.getElementById('phone').value;
    // Don't know why ^\d{3}[-]\d{3}[-]\d{4}$ isn't working :/
    var phPattern = /\d{10}|\d{7}/;
    var result = phPattern.test(number);
      if(phPattern.test(number) == true){
        errorMessage.style.display = 'none';
        document.getElementById('phone').style.backgroundColor = "white";

      }
      else{
        errorMessage.innerHTML = "Must enter valid phone number";
        errorMessage.style.display = 'block';
        document.getElementById('phone').style.backgroundColor = "#fba3b4";
      }
  }

  function checkEmail() {
    var input = document.getElementById('email').value;
    var ePattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (ePattern.test(input) == true) {
        errorMessage.style.display = 'none';
        document.getElementById('email').style.backgroundColor = "white";

    }
    else{
      errorMessage.innerHTML = "Incorrect email format";
      errorMessage.style.display = 'block';
      document.getElementById('email').style.backgroundColor = "#fba3b4";
    }
  }

  function checkRadio() {
    var radioOne = document.getElementById('radio1').checked;
    var radioTwo = document.getElementById('radio2').checked;
    var radioThree = document.getElementById('radio3').checked;
    var radioFour = document.getElementById('radio4').checked;

    if (radioOne == false && radioTwo == false &&
        radioThree == false && radioFour == false){
            errorMessage.innerHTML = "Please select one:";
            errorMessage.style.display = 'block';

        }
    else {
        errorMessage.style.display = 'none';
    }
  }
