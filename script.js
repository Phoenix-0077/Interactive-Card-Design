var cardName = document.getElementById("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementsByTagName("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")
var label = document.getElementsByTagName("label")

//Function to validate the input details
document.getElementsByTagName("button").addEventListener('click', function(){
    if (input.length !== 0){
        document.error.style.display = "none";
    };
});

// Function to display details on the live card
    input.addEventListener("click", function(){
        nameCard.textContent = cardName.value
    })

    function changeColor(){
        label.style.color = "blue";
    }