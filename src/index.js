import pagePhoto from "./images/restaurant-page-photo.jpeg"

const contentDiv = document.querySelector("#content")

const contentText = document.createElement("p")
contentText.textContent = "This restaurant is in the USA, Ohio. It has a very rich menu for every culture. There are japanese, german, italian, and turkish foods in the restaurant. Don't forget the try these delicious foods."
const contentHeading = document.createElement("h1")
contentHeading.textContent = "Best Restaurant In the World"

const newPhoto = document.createElement("img")
newPhoto.src = pagePhoto

contentDiv.appendChild(contentHeading)
contentDiv.appendChild(contentText)
contentDiv.appendChild(newPhoto)
