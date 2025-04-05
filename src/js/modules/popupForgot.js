import { showError, clearError, isValidEmail } from "./utils/formValidation.js";

const popupSignIn = document.getElementById("popup-in");
const forgetLink = popupSignIn?.querySelector("#popup-sign-in__forget");
const popupChange = document.getElementById("popup-change-pass");
const changeForm = popupChange?.querySelector("form");
const changeEmailInput = popupChange?.querySelector(".popup-change__email");

const initPopupForgot = () => {
  if (!forgetLink || !popupChange) return;

  let wasFocusedManually = false;

  changeEmailInput?.addEventListener("focus", () => {
    wasFocusedManually = true;
  });

  // Открытие окна смены пороля
  forgetLink.addEventListener("click", (e) => {
    e.preventDefault();
    popupSignIn?.classList.remove("active");
    popupChange.classList.add("active");
    requestAnimationFrame(() => {
      if (!wasFocusedManually) {
        changeEmailInput?.focus();
      }
    });
  });

  // Закрытие окна при клике вне контента
  popupChange.addEventListener("click", (e) => {
    if (e.target === popupChange) {
      popupChange.classList.remove("active");
      wasFocusedManually = false;
    }
  });

  // валидация
  changeForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError(changeEmailInput);

    if (!changeEmailInput.value.trim()) {
      showError(changeEmailInput, "Enter your email");
      return;
    } else if (!isValidEmail(changeEmailInput.value)) {
      showError(changeEmailInput, "Email is not valid");
      return;
    }

    // симуляция успешной отправки
    const btn = changeForm.querySelector(".popup-change__inside");
    btn.textContent = "Verifying...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Verify";
      btn.disabled = false;
      popupChange.classList.remove("active");
      changeForm.reset();
    }, 1500);
  });
};

export { initPopupForgot };
