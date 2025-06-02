// disc-routing.js – DISC Personality Routing Logic for Sunny Financial

function routeByPersonality(type) {
  switch (type.toUpperCase()) {
    case "D":
      window.location.href = "fia.html"; // Direct to Fixed Indexed Annuities
      break;
    case "I":
      window.location.href = "iul.html"; // Direct to Indexed Universal Life
      break;
    case "S":
      window.location.href = "wholelife.html"; // Direct to Whole Life Options
      break;
    case "C":
      window.location.href = "term.html"; // Direct to Term Life Plans
      break;
    default:
      alert("Please complete the DISC form to proceed.");
  }
}

// Example trigger
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("disc-submit");
  if (btn) {
    btn.addEventListener("click", () => {
      const type = document.querySelector("input[name='disc']:checked")?.value;
      if (type) {
        routeByPersonality(type);
      } else {
        alert("Please select a DISC type.");
      }
    });
  }
});
