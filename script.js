var cardName = document.getElementById("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementsByTagName("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var Input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")
var label = document.getElementsByTagName("label")

//Function to validate the input details
submit.addEventListener('onclick', validateDetails);

function validateDetails(){
    if (cardName = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cardNumber = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cardDate = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cvcNumber = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
}

//Function to display details on the live card
    // Input.addEventListener("click", function(){
    //     nameCard.textContent = cardName.value

    // })
    // label.addEventListener('mouseover', changeColor);

    // function changeColor(){
    //     label.style.color = "blue";
    // }