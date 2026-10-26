export function createMenuTab() {
  const contentDiv = document.querySelector("#content");

  const content = document.createElement("div");

  const menuList = document.createElement("ul");
  const menuItem = document.createElement("li");

  content.innerHTML = `
  <h1>Our Menu</h1>
  <p>
    Explore flavors from four different culinary traditions,
    prepared with care and fresh ingredients.
  </p>

  <section>
    <h2>Japanese Cuisine</h2>
    <ul>
      <li>Sushi Rolls — Fresh fish, rice, and vegetables.</li>
      <li>Ramen — Japanese noodle soup served with a rich broth.</li>
      <li>Chicken Teriyaki — Grilled chicken glazed with sweet teriyaki sauce.</li>
    </ul>
  </section>

  <section>
    <h2>Italian Cuisine</h2>
    <ul>
      <li>Margherita Pizza — Classic pizza with tomato, mozzarella, and basil.</li>
      <li>Spaghetti Carbonara — Pasta with a creamy egg and cheese sauce.</li>
      <li>Lasagna — Layers of pasta, rich meat sauce, and cheese.</li>
    </ul>
  </section>

  <section>
    <h2>Turkish Cuisine</h2>
    <ul>
      <li>Adana Kebab — Spiced minced meat grilled over an open flame.</li>
      <li>Mantı — Small dumplings served with yogurt and garlic sauce.</li>
      <li>Lahmacun — Thin, crispy flatbread topped with seasoned minced meat.</li>
    </ul>
  </section>

  <section>
    <h2>German Cuisine</h2>
    <ul>
      <li>Schnitzel — Crispy breaded meat served with potato salad.</li>
      <li>Bratwurst — Traditional German sausage with mustard.</li>
      <li>Pretzel — Soft, freshly baked bread with a golden crust.</li>
    </ul>
  </section>
`;

  contentDiv.appendChild(content);
}
