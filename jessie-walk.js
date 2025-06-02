// jessie-walk.js – Jessie AI Assistant Walk-In Script

document.addEventListener("DOMContentLoaded", () => {
  const assistant = document.createElement("div");
  assistant.id = "jessie-assistant";
  assistant.style.position = "fixed";
  assistant.style.bottom = "0";
  assistant.style.right = "-300px";
  assistant.style.width = "280px";
  assistant.style.height = "400px";
  assistant.style.background = "#f9f9f9";
  assistant.style.border = "2px solid #aaa";
  assistant.style.borderRadius = "10px";
  assistant.style.boxShadow = "0 0 12px rgba(0,0,0,0.3)";
  assistant.style.transition = "right 2s ease";
  assistant.style.zIndex = "1000";
  assistant.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h3 style="margin-top: 0;">Hi, I'm Jessie 🤖</h3>
      <p>Here to help you explore life insurance options!</p>
      <button onclick="document.getElementById('jessie-assistant').remove()" style="margin-top: 15px; padding: 10px 15px;">Close</button>
    </div>
  `;

  document.body.appendChild(assistant);

  setTimeout(() => {
    assistant.style.right = "20px";
  }, 1000);
});
