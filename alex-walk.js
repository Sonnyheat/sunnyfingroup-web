
// alex-walk.js – Sunny Financial Walk-In Animation for Alex (AI Assistant)

document.addEventListener("DOMContentLoaded", () => {
  const alexAvatar = document.createElement("div");
  alexAvatar.id = "alex-avatar";
  alexAvatar.style.position = "fixed";
  alexAvatar.style.bottom = "0";
  alexAvatar.style.right = "-300px";
  alexAvatar.style.width = "300px";
  alexAvatar.style.height = "420px";
  alexAvatar.style.background = "url('https://sunnyfingroup.com/images/alex.png') no-repeat center/cover";
  alexAvatar.style.borderRadius = "15px";
  alexAvatar.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
  alexAvatar.style.transition = "right 2s ease";
  alexAvatar.style.zIndex = "1000";

  document.body.appendChild(alexAvatar);

  setTimeout(() => {
    alexAvatar.style.right = "20px";
  }, 1200);
});
