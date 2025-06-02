// fia.js – Sunny Financial FIA Funnel Logic

document.addEventListener("DOMContentLoaded", () => {
  const funnel = document.createElement("section");
  funnel.id = "fia-funnel";
  funnel.style.padding = "40px";
  funnel.style.fontFamily = "Arial, sans-serif";
  funnel.innerHTML = `
    <h2>Fixed Indexed Annuities (FIA)</h2>
    <p>Preserve your principal. Participate in market gains. Enjoy tax-deferred growth.</p>
    <ul>
      <li>✅ 100% principal protection</li>
      <li>✅ Market-linked growth potential</li>
      <li>✅ Tax-deferred earnings</li>
      <li>✅ Lifetime income options</li>
    </ul>
    <button id="scheduleFIA" style="padding: 10px 20px; margin-top: 20px;">Schedule Your FIA Call</button>
  `;

  document.body.appendChild(funnel);

  document.getElementById("scheduleFIA").addEventListener("click", () => {
    window.location.href = "/calendly";
  });
});