
// iul-calendly.js – Sunny Financial IUL Calendly Integration

document.addEventListener("DOMContentLoaded", () => {
  const calendlyWidget = document.createElement("div");
  calendlyWidget.id = "calendly-iul";
  calendlyWidget.style.position = "fixed";
  calendlyWidget.style.bottom = "0";
  calendlyWidget.style.right = "0";
  calendlyWidget.style.width = "400px";
  calendlyWidget.style.height = "600px";
  calendlyWidget.style.border = "none";
  calendlyWidget.style.zIndex = "9999";
  calendlyWidget.innerHTML = \`
    <iframe src="https://calendly.com/sunnyfinancial/iul-consultation"
            width="100%" height="100%" frameborder="0"
            style="border: none; border-radius: 10px;"
            allowfullscreen></iframe>
    <button onclick="document.getElementById('calendly-iul').remove()" 
            style="position: absolute; top: 5px; right: 10px; background: #000; color: #fff; border: none; padding: 5px 10px; cursor: pointer; z-index: 10000;">Close</button>
  \`;

  document.body.appendChild(calendlyWidget);
});
