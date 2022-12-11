function setMaxDate() {
  //Set maximum date for birthday to 18 years ago today, to ensure user is 18 years old.
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear() - 18;

  //Format data in congruence with HTML5 max attribute syntax.
  if (dd < 10) {dd = '0' + dd;}
  if (mm < 10) {mm = '0' + mm;}
  
  //Create string.
  today = yyyy + '-' + mm + '-' + dd;
  //Set max attribute.

  document.querySelector('input[type="date"]').setAttribute("max", today);
}

setMaxDate();


function captureUserData() {
  var inputs, index;

  //Message must not be more than 100 characters.
  if (document.querySelector('textarea').value.length > 100 ) {
      //Notify user
      alert("Your message cannot be more than 100 characters. Please shorten it!");
      //Cancel data submission
      return;
  }

  //JSON for data collection and firebase submission
  let loginData = {};

  //Exclude junk inputs via CSS psuedo-class selector.
  inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]), textarea');

  for (index = 0; index < inputs.length; ++index) {

      //Added for readability.
      let loginKey = inputs[index].name;
      let loginValue = inputs[index].value;

      //Save to object
      loginData[loginKey] = loginValue;

      //Scrub all input fields.
      inputs[index].value = "";
  }

  console.log(loginData);

  console.log("Form data captured!");

  alert("Thank you! Your account will be processed.");
}

const form = document.querySelector("form")

//Listen for a form submission, only on create an account page.
form.addEventListener('submit', e=> {
    console.log("Blocked default submit.");
    e.preventDefault();
    captureUserData();
});