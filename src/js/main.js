import { initPopapAuth } from './modules/popupAuth.js';
import { initPopupRegister } from './modules/popupRegister.js';
import { initPopupForgot } from './modules/popupForgot.js';
import { showError, clearError } from './modules/utils/formValidation.js';

document.addEventListener('DOMContentLoaded', () => {
    initPopapAuth();
    initPopupRegister();
    initPopupForgot();
});