// iul.js – Interactive IUL Page Logic

document.addEventListener("DOMContentLoaded", () => {
  const quoteButton = document.getElementById("get-quote");

  if (quoteButton) {
    quoteButton.addEventListener("click", () => {
      alert("Your personalized IUL quote is being generated...");
    });
  }
});
