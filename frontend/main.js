document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Demo redirect
      window.location.href = "dashboard.html";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Demo redirect
      window.location.href = "login.html";
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});