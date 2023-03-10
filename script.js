var cardName = document.querySelector("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementById("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")
var label = document.getElementsByTagName("label")


//Function to validate the input details
console.log('This is me')


function validateForm(){
    //To validate input name
    var emptyName = document.forms["myForm"]["cardname"].value;
    // if(emptyName == ""){
    //     alert("Name and number must be filled");
    //     return false;
    // }
    //To validate input number
    var emptyNumber = document.forms["myForm"]["cardnumber"].value;
    // if(emptyNumber == ""){
    //     alert("Name and number must be filled");
    //     return false;
    // }
    // if(isNaN(emptyNumber) == true){
    //     alert("Number entered is invalid");
    //     return false;
    // }
    //To validate input date(month)
    var dateMonth = document.forms["myForm"]["month"].value;
    // if(dateMonth == ""){
    //     alert("Number entered is invalid");
    //     return false;
    // }
    // if(isNaN(dateMonth) == true){
    //     alert("Number entered is invalid");
    //     return false;
    // }
    // if(dateMonth > 12){
    //     alert("Number entered is invalid");
    //     return false;
    // }
    //To validate input date(year)
    var dateYear = document.forms["myForm"]["year"].value;
    // if(dateYear == ""){
    //     alert("Year is empty");
    //     return false;
    // }
    // if(isNaN(dateYear) == true){
    //     alert("Year is not a number");
    //     return false;
    // }
    // if(dateYear.length != 2){
    //     alert("Year entered should be two digits");
    //     return false;
    // }
    var cvcNumber = document.forms["myForm"]["cvcnumber"].value;
    // if(isNaN(cvcNumber) == true && cvcNumber.length != 3){
    //     alert("Number entered is invalid");
    //     return false;
    // }
}


// Function to display details on the live card
// submit.addEventListener('click', function(e){
//     alert('This is me');
//     e.preventDefault();
// });

