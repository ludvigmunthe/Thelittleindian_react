// utils.js

/*export function getRandomItem() {
    const randomNumber = Math.random();
    const multipliedNumber = randomNumber * 6;
    const randomIndex = Math.floor(multipliedNumber);
    const container = document.getElementById("randomitems");
  
    if (container) {
      switch (randomIndex) {
        case 0:
          container.innerHTML = "<img src='pics/pappadam.jpeg' width='100' height='200' alt='Product1'>";
          break;
        case 1:
          container.innerHTML = "<img src='pics/samosa.jpg' width='100' height='200' alt='Product2'>";
          break;
        case 2:
          container.innerHTML = "<img src='pics/pakora.jpg' width='100' height='200' alt='Product3'>";
          break;
        case 3:
          container.innerHTML = "<img src='pics/springroll.jpg' width='100' height='200' alt='Product4'>";
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
}*/
  
export function callAlert() {
    window.alert("Hello world!");
}
  
export function bigImg(imgElement) {
    imgElement.style.width = "250px";
    imgElement.style.height = "250px";
}

export function normalImg(imgElement) {
    imgElement.style.width = "200px";
    imgElement.style.height = "200px";
}
  
export function FocusFunction(x) {
    x.style.backgroundColor = "yellow";
}
  
export function FocusFunctionReset(x) {
    x.style.backgroundColor = "white";
}
  
export function menuFunction() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
  