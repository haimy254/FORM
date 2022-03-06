const form = document.querySelector("#myform");

form.addEventListener("submit", (event) => {
    //prevent refresh on submitting
    event.preventDefault();
    //get all form value 
    let year=document. getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let male = document.getElementById("male").checked;
    let male = document.getElementById("female").checked;
    let result = document.getElementById("result");
    