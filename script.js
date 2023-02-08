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
submit.addEventListener('click', function(){
    if(cardName.value().length() == 0 || cardNumber.value().length() == 0 ||
    cardDate.value().length() == 0 || cvcNumber.length() == 0){
        error.style.display = 'flex'
    }
});

// Function to display details on the live card
// submit.addEventListener('click', function(e){
//     alert('This is me');
//     e.preventDefault();
// });

