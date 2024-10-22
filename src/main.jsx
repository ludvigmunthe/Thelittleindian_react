import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/* function getRandomItem() {
  var randomNumber = Math.random();

  var multipliedNumber = randomNumber * 6;
  
  var randomIndex = Math.floor(multipliedNumber);

  var container = document.getElementById("randomitems");

  switch (randomIndex) {
      case 0:
          container.innerHTML = "<img src='pics/pappadam.jpeg' width='100' height='200' alt='Product1'>"
          break;
      case 1:
          container.innerHTML = "<img src='pics/samosa.jpg' width='100' height='200' alt='Product2'>";
          break;
      case 2:
          container.innerHTML = "<img src='pics/pakora.jpg' width='100' height='200' alt='Product3'>";
          break;
      case 3:
          container.innerHTML = "<img src='pics/springroll.jpg' width='100' height=200' alt='Product4'>";
          break;
      case 4:
          container.innerHTML = "<img src='pics/Chicken-Pakora.jpg' width='100' height='200' alt='Product5'>";
          break;
      case 5:
          container.innerHTML = "<img src='pics/drumstick.jpg' width='100' height='200' alt='Product6'>";
          break;
    default:
      container.innerHTML = "<p>No product found</p>";
  }
}

function callAlert(){
  window.alert("Hello world!");
}

function bigImg(x) {
   x.height = "250";
   x.width = "250";
}
 
 function normalImg(x) {
   x.height = "200";
   x.width = "200";
}

function FocusFunction(x) {
 x.style.backgroundColor = "yellow";
}

function FocusFunctionReset(x) {
 x.style.backgroundColor="white";
}

function menuFunction() {
   var dropdown = document.getElementById("myDropdown");
   if (dropdown.style.display === "block") {
       dropdown.style.display = "none";
   } else {
       dropdown.style.display = "block";
   }
}

$(document).ready(function(){
   $("#flip").click(function(){
     $("#panel").slideToggle("slow");
   });
});


$(document).ready(function(){
   $("#cater1, #cater2, #cater3").click(function(){
       $(this).animate({
           opacity: 1.0,
           width: "+=10px", 
           height: "+=10px" 
       }).siblings().animate({
           opacity: 0.25,
           width: "-=10px", 
           height: "-=10px" 
       });
   });
   $(document).click(function(event) {
       if (!$(event.target).closest('#cater1, #cater2, #cater3').length) {
           $("#cater1, #cater2, #cater3").animate({
               opacity: 1.0,
               width: "initial",
               height: "initial" 
           });
       }
   });
}); */