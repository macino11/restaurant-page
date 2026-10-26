export function createAboutTab() {
  const contentDiv = document.querySelector("#content");

  const content = document.createElement("p");
  content.innerHTML = `
  <h1>About Us</h1>

  <p>
    At The World Table, we believe that food brings people together.
    Our restaurant was created with a simple idea: to let everyone
    experience the wonderful flavors of different cultures without
    traveling around the world.
  </p>

  <p>
    Our menu celebrates the culinary traditions of Japan, Germany,
    Italy, and Turkey. We focus on quality ingredients, carefully
    prepared dishes, and a welcoming atmosphere where everyone feels at home.
  </p>

  <p>
    Whether you're enjoying dinner with family, meeting friends,
    or discovering a new favorite dish, we're happy to have you at our table.
  </p>

  <p>
    <strong>Our mission is simple: Great food, different cultures, one table.</strong>
  </p>
`;

  contentDiv.appendChild(content);
}
