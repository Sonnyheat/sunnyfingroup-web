// main.js – Core Functionality

document.addEventListener("DOMContentLoaded", () => {
  console.log("Sunny Financial site loaded successfully.");

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  });
});
