// ai-walk.js – Sunny Financial AI Assistant Walk-In Script

document.addEventListener("DOMContentLoaded", () => {
  const assistant = document.createElement("div");
  assistant.id = "ai-assistant";
  assistant.style.position = "fixed";
  assistant.style.bottom = "0";
  assistant.style.left = "-300px";
  assistant.style.width = "280px";
  assistant.style.height = "400px";
  assistant.style.background = "#fff";
  assistant.style.border = "2px solid #ccc";
  assistant.style.borderRadius = "10px";
  assistant.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  assistant.style.transition = "left 2s ease";
  assistant.style.zIndex = "1000";
  assistant.innerHTML = \`
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h3 style="margin-top: 0;">Hi, I'm Alex 👋</h3>
      <p>Welcome to Sunny Financial.<br>How can I help you today?</p>
      <button onclick="document.getElementById('ai-assistant').remove()" style="margin-top: 15px; padding: 10px 15px;">Close</button>
    </div>
  \`;

  document.body.appendChild(assistant);

  setTimeout(() => {
    assistant.style.left = "20px";
  }, 1000);
});
