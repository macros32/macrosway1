document.addEventListener("DOMContentLoaded", () => {
  const menuItems = [
    { name: "Balanced Bowl", protein: 30, carbs: 30, fats: 18.5, price: "$9.50", emoji: "🥗" },
    { name: "High Protein", protein: 45, carbs: 6, fats: 12, price: "$10.50", emoji: "🍗" },
    { name: "Low Carb Bowl", protein: 40, carbs: 10, fats: 15, price: "$10.00", emoji: "🥩" },
    { name: "Keto Bowl", protein: 55, carbs: 4, fats: 41, price: "$11.50", emoji: "🥓" },
  ];

  const menuList = document.getElementById("menu-list");

  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <p><strong>${item.name}</strong></p>
      <p>${item.protein}P • ${item.carbs}C • ${item.fats}F</p>
      <p><em>${item.price}</em></p>
    `;
    card.onclick = () => alert(`You selected: ${item.name}`);
    menuList.appendChild(card);
  });
});
