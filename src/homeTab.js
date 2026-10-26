import pagePhoto from "./images/restaurant-page-photo.jpeg";

export function createHomeTab() {
  const contentDiv = document.querySelector("#content");

  const content = document.createElement("p");
  content.innerHTML = `
  <h1>Welcome to The World Table</h1>

  <h2>A World of Flavors, One Table.</h2>

  <p>
    Discover delicious food from around the world, all in one place!
    From authentic Italian pasta and Japanese sushi to traditional
    Turkish kebabs and German specialties, we bring different cultures
    together through food.
  </p>

  <p>
    Join us for a unique dining experience filled with fresh ingredients,
    wonderful flavors, and unforgettable moments.
  </p>
`;

  const newPhoto = document.createElement("img");
  newPhoto.src = pagePhoto;

  
  contentDiv.appendChild(content);
  contentDiv.appendChild(newPhoto)
}
