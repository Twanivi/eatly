import { showError, clearError, isValidEmail } from "./utils/formValidation.js";

const signUpBtn = document.querySelector(".header-sign-up");
const popupSignUp = document.getElementById("popup-up");
const switchToSignIn = popupSignUp?.querySelector(".popup-sign-up__sign-in");
const nameInput = popupSignUp?.querySelector(".popup-sign-up__user");
const form = popupSignUp?.querySelector("form");
const emailInput = popupSignUp?.querySelector(".popup-sign-up__email");
const passwordInput = popupSignUp?.querySelector(".popup-sign-up__password");
const passwordWrapper = passwordInput?.closest(".password-wrapper");

const initPopupRegister = () => {
  if (!signUpBtn || !popupSignUp) return;
  console.log("проверка попапАп");

  let wasFocusedManually= false;

  nameInput?.addEventListener("focus", () => {
    wasFocusedManually = true;
  });

  // Открытие окна регистрации
  signUpBtn.addEventListener("click", () => {
    wasFocusedManually = false;
    popupSignUp.classList.add("active");

    requestAnimationFrame(() => {
      if (!wasFocusedManually) {
        emailInput?.focus();
      }
    });
  });

  // Закрытие окна при клике вне контента
  popupSignUp.addEventListener("click", (e) => {
    if (e.target === popupSignUp) {
      popupSignUp.classList.remove("active");
      wasFocusedManually = false;
    }
  });

  // Переключение на SignIn
  switchToSignIn?.addEventListener("click", (e) => {
    e.preventDefault();
    popupSignUp.classList.remove("active");
    document.getElementById("popup-in")?.classList.add("active");
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
    [nameInput, emailInput, passwordInput].forEach(clearError);

    if (!nameInput.value.trim()) {
      showError(nameInput, "Enter your name");
      valid = false;
    }

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
    const btn = form.querySelector(".popup-sign-up__inside");
    btn.textContent = "Signing up...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Sign up";
      btn.disabled = false;
      popupSignUp.classList.remove("active");
      form.reset();
    }, 1500);
  });
};

export { initPopupRegister };
