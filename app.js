const menu = [
  {
    title: "Balanced Bowl",
    protein: 30,
    carbs: 30,
    fats: 18.5,
    price: 9.5,
    image: "🥗",
  },
  {
    title: "High Protein",
    protein: 45,
    carbs: 6,
    fats: 12,
    price: 10.5,
    image: "🍗",
  },
  {
    title: "Low Carb Bowl",
    protein: 40,
    carbs: 10,
    fats: 15,
    price: 10,
    image: "🥩",
  },
  {
    title: "Keto Bowl",
    protein: 55,
    carbs: 4,
    fats: 41,
    price: 11.5,
    image: "🥓",
  },
];

const app = document.getElementById("root");

function renderMenu() {
  const container = document.createElement("div");
  container.innerHTML = `<h1>Order by Macros</h1>`;

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(2, 1fr)";
  grid.style.gap = "16px";
  grid.style.maxWidth = "400px";
  grid.style.margin = "auto";

  menu.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="font-size: 30px;">${item.image}</div>
      <div><strong>${item.title}</strong></div>
      <div>${item.protein}P • ${item.carbs}C • ${item.fats}F</div>
      <em>$${item.price.toFixed(2)}</em>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
  app.appendChild(container);
}

document.addEventListener("DOMContentLoaded", renderMenu);
