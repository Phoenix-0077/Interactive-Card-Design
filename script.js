// var cardName = document.querySelector("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementById("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")
var label = document.getElementsByTagName("label")
var emptyName = document.forms["myForm"]["cardname"].value;
var emptyNumber = document.forms["myForm"]["cardnumber"].value;

//Function to validate the input details
console.log('This is me')

function validateForm(){
    if(emptyName == ""){
        alert("Name and number must be filled");
        return false;
    }
}

// Function to display details on the live card
// submit.addEventListener('click', function(e){
//     alert('This is me');
//     e.preventDefault();
// });

