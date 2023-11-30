const loginBtn = document.querySelector('.header-login');
const popup = document.querySelector('#popup');
const closedPopupOut = document.querySelector('.popup-sign-in__content');
const closedPopup = document.querySelector('.popup-sign-in__img a img');
const email = document.querySelector('.popup-sign-in__email');
const password = document.querySelector('.popup-sign-in__password');


export const popupLogin = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        if (element === loginBtn){
            popup.classList.add('active');
        } else if(element === closedPopup || !element.closest('.popup-sign-in__content')){
            popup.classList.remove('active');
        }
    })
}

export const focusEmail = () => {
    email.addEventListener('focus', () => {
        email.style.outline = '2px solid #6C5FBC';
        email.style.background = 'url("../../assets/icons/email-violet.svg) no-repeat 23px 22px';
        email.style.backgroundColor = '#fff';
    })
}

export const focusPassword = () => {
    password.addEventListener('focus', () => {
        password.style.outline = '2px solid #6C5FBC';
        password.style.background = 'url("../../assets/icons/lock-violet.svg") no-repeat 23px 20px, url("../../assets/icons/eye-violet.svg") no-repeat 330px 20px;';
        password.style.backgroundColor = '#fff';
    })
}

