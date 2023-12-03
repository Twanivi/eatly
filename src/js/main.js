import { popupLogin } from "./modules/popup-sign-in";
popupLogin();
const linkSignUp = document.querySelector('.popup-sign-in__sign-up');
linkSignUp.addEventListener('click', () => {
    popupIn.classList.remove('active');
    
})



import { popupSignUp } from "./modules/popup-sign-up";
popupSignUp();
const linkSignIn = document.querySelector('.popup-sign-in__sign-in');
linkSignIn.addEventListener('click', () => {
    popupUp.classList.remove('active');
    popupIn.classList.add('active');
})

import { changePass } from "./modules/popup-change-pass";
changePass();