const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const formMessage = document.querySelector("#form-message");
const togglePasswordButton = document.querySelector("#toggle-password");

togglePasswordButton.addEventListener("click", () => {
  const passwordIsHidden = passwordInput.type === "password";
  passwordInput.type = passwordIsHidden ? "text" : "password";
  togglePasswordButton.textContent = passwordIsHidden ? "Hide" : "Show";
  togglePasswordButton.setAttribute("aria-pressed", String(passwordIsHidden));
});

function isValidEmail(value) {
  // A simple client-side check for a typical email address format.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clearValidation() {
  emailError.textContent = "";
  passwordError.textContent = "";
  emailInput.removeAttribute("aria-invalid");
  passwordInput.removeAttribute("aria-invalid");
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearValidation();

  let isValid = true;

  if (!emailInput.value.trim()) {
    emailError.textContent = "Please enter your email address.";
    emailInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    emailInput.setAttribute("aria-invalid", "true");
    isValid = false;
  }

  if (!passwordInput.value) {
    passwordError.textContent = "Please enter your password.";
    passwordInput.setAttribute("aria-invalid", "true");
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "For this demo, use at least 6 characters.";
    passwordInput.setAttribute("aria-invalid", "true");
    isValid = false;
  }

  if (!isValid) {
    formMessage.textContent = "Please correct the highlighted fields and try again.";
    formMessage.classList.add("error");
    return;
  }

  // This is a frontend demonstration only. No credentials are sent or stored.
  formMessage.textContent = "Demo validation successful. No account was authenticated.";
  formMessage.classList.add("success");
});
