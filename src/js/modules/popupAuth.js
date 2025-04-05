import { showError, clearError, isValidEmail } from "./utils/formValidation.js";

const loginBtn = document.querySelector(".header-login");
const popupSignIn = document.getElementById("popup-in");
const switchToSignUp = popupSignIn?.querySelector(".popup-sign-in__sign-up");
const forgetLink = popupSignIn?.querySelector("#popup-sign-in__forget");
const emailInput = popupSignIn?.querySelector(".popup-sign-in__email");
const form = popupSignIn?.querySelector("form");
const passwordInput = popupSignIn?.querySelector(".popup-sign-in__password");
const passwordWrapper = passwordInput?.closest(".password-wrapper");

const initPopapAuth = () => {
  if (!loginBtn || !popupSignIn) return;  
  console.log("проверка попапИн");

  let wasFocusedManually = false;

  emailInput?.addEventListener("focus", () => {
    wasFocusedManually = true;
  });

  // Открытие окна авторизации
  loginBtn.addEventListener("click", () => {
    wasFocusedManually = false;
    popupSignIn.classList.add("active");

    requestAnimationFrame(() => {
        if (!wasFocusedManually) {
          emailInput?.focus();
        }
    });

  });

  // Закрытие окна при клике вне контента
  popupSignIn.addEventListener("click", (e) => {
    if (e.target === popupSignIn) {
      popupSignIn.classList.remove("active");
      wasFocusedManually = false;
    }
  });

  // Переключение на SignUp
  switchToSignUp?.addEventListener("click", (e) => {
    e.preventDefault();
    popupSignIn.classList.remove("active");
    document.getElementById("popup-up")?.classList.add("active");
  });

  // Переключение на ChangePass
  forgetLink?.addEventListener("click", (e) => {
    e.preventDefault();
    popupSignIn.classList.remove("active");
    document.getElementById("popup-change-pass")?.classList.add("active");
  });

  // иконка глаза
  passwordWrapper?.addEventListener("click", () => {
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    passwordWrapper.classList.toggle("show", !isVisible);
  });

  // Валидация
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    clearError(emailInput);
    clearError(passwordInput);

    if (!emailInput.value.trim()) {
      showError(emailInput, "Enter your email");
      valid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Entered email is incorrect");
      valid = false;
    }

    if (!passwordInput.value.trim()) {
      showError(passwordInput, "Enter your password");
      valid = false;
    }

    if (!valid) return;

    // симуляция успешной отправки
    const btn = form.querySelector(".popup-sign-in__inside");
    btn.textContent = "Signing in...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Sign in";
      btn.disabled = false;
      popupSignIn.classList.remove("active");
      form.reset();
    }, 1500);
  });
};

export { initPopapAuth };
