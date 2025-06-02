
// index.js – Sunny Financial Group Main Entry

import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.id = "main-app";
  app.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  app.style.padding = "50px";
  app.style.textAlign = "center";
  app.style.backgroundColor = "#fdfcf7";
  app.innerHTML = `
    <img src="favicon.ico" alt="Sunny Logo" style="width: 80px; margin-bottom: 20px;" />
    <h1 style="color: #1f2e3d;">Sunny Financial Group</h1>
    <p style="font-size: 1.1rem;">Only What’s Best for You – Always</p>
    <p style="margin-top: 30px;">Explore our products: IUL • FIA • Whole Life • Final Expense</p>
  `;

  document.body.appendChild(app);
});
