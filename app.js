// Basic pickup menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  const menuItems = [
    { name: "Protein Power Bowl", macros: "P: 45g / C: 40g / F: 12g", price: "$10" },
    { name: "Keto Sunrise", macros: "P: 38g / C: 8g / F: 28g", price: "$11" },
    { name: "Balanced Berry Oats", macros: "P: 25g / C: 50g / F: 10g", price: "$8" },
  ];

  const list = document.createElement("ul");
  list.className = "menu-list";

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong><br><span>${item.macros}</span><br><em>${item.price}</em>`;
    list.appendChild(li);
  });

  app.appendChild(list);
});
