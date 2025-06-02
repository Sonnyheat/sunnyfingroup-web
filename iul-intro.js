
// iul-intro.js – Sunny Financial IUL Introduction Module

document.addEventListener("DOMContentLoaded", () => {
  const introContainer = document.createElement("div");
  introContainer.id = "iul-intro";
  introContainer.style.position = "fixed";
  introContainer.style.top = "10%";
  introContainer.style.right = "20px";
  introContainer.style.width = "320px";
  introContainer.style.padding = "20px";
  introContainer.style.background = "#f5f5f5";
  introContainer.style.border = "1px solid #ccc";
  introContainer.style.borderRadius = "10px";
  introContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  introContainer.style.zIndex = "999";

  introContainer.innerHTML = `
    <h3 style="margin-top: 0; font-family: Arial, sans-serif;">Indexed Universal Life (IUL)</h3>
    <p style="font-family: Arial, sans-serif;">
      An IUL policy gives you the potential for tax-free retirement income with market-linked growth and downside protection.
      At Sunny Financial, we design your IUL with only what’s best for you – always.
    </p>
    <button onclick="document.getElementById('iul-intro').remove()" style="margin-top: 10px;">Close</button>
  `;

  document.body.appendChild(introContainer);
});
