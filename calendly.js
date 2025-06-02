
// calendly.js – Sunny Financial Calendly Embed Script

document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.head.appendChild(script);

  const calendlyContainer = document.createElement("div");
  calendlyContainer.className = "calendly-inline-widget";
  calendlyContainer.setAttribute("data-url", "https://calendly.com/sunnyfinancial/consultation");
  calendlyContainer.style.minWidth = "320px";
  calendlyContainer.style.height = "630px";
  calendlyContainer.style.border = "1px solid #ddd";
  calendlyContainer.style.borderRadius = "8px";
  calendlyContainer.style.overflow = "hidden";

  document.body.appendChild(calendlyContainer);
});
