
let form = document.querySelector("#my-form");

form.addEventListener("submit", akanName);
function akanName (event)
{
       //prevent refresh on submitting
       event.preventDefault(); 

    //get all form value 
    let year=document. getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let male = document.getElementById("male").checked;
    let famale= document.getElementById("female").checked;
    let result = document.getElementsByClassName("result");

//validation checks for empty values
if (!year || !month || !day || (!male && !female)) {
    result.classList.add("invalid");
    result.textContent = "all fields should be filled";
  }

  //validation check for day
  if (day > 31 || day < 1) {
    result.classList.add("invalid");
    result.textContent = "please make sure you add a valid day";
  }

  //validation check for month
  if (month > 12 || month < 1) {
    result.classList.add("invalid");
    result.textContent = "please make sure you add a valid month";
  }

  //if on reaching this point that means all validations have passed
  //formular application for determining day of the week
  let dayOfTheWeek = Math.floor(
    (Number(year.slice(0, 2)) / 4 -
      2 * Number(year.slice(0, 2)) -
      1 +
      (5 * Number(year.slice(2, 4))) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
      7
  );

  //array of the male names
  let maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  //array of the female names
  let femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  if (male) {
    result.classList.add("valid");

    switch (dayOfTheWeek) {
      case 1:
        result.textContent =
          "you were born on Sunday your Akan name is " + maleAkanNames[0];
        break;
      case 2:
        result.textContent =
          "you were born on Monday your Akan name is " + maleAkanNames[1];
        break;
      case 3:
        result.textContent =
          "you were born on Tuesday your Akan name is " + maleAkanNames[2];
        break;
      case 4:
        result.textContent =
          "you were born on Wednesday your Akan name is " + maleAkanNames[3];
        break;
      case 5:
        result.textContent =
          "you were born on Thursday your Akan name is " + maleAkanNames[4];
        break;
      case 6:
        result.textContent =
          "you were born on Friday your Akan name is " + maleAkanNames[5];
        break;
      case 7:
        result.textContent =
          "you were born on Saturday your Akan name is " + maleAkanNames[6];
        break;

      default:
        break;
    }
  } else if (female) {
    result.classList.add("valid");

    switch (dayOfTheWeek) {
      case 1:
        result.textContent =
          "you were born on Sunday your Akan name is " + femaleAkanNames[0];
        break;
      case 2:
        result.textContent =
          "you were born on Monday your Akan name is " + femaleAkanNames[1];
        break;
      case 3:
        result.textContent =
          "you were born on Tuesday your Akan name is " + femaleAkanNames[2];
        break;
      case 4:
        result.textContent =
          "you were born on Wednesday your Akan name is " + femaleAkanNames[3];
        break;
      case 5:
        result.textContent =
          "you were born on Thursday your Akan name is " + femaleAkanNames[4];
        break;
      case 6:
        result.textContent =
          "you were born on Friday your Akan name is " + femaleAkanNames[5];
        break;
      case 7:
        result.textContent =
          "you were born on Saturday your Akan name is " + femaleAkanNames[6];
        break;

      default:
        break;
     
    }
  }
}

