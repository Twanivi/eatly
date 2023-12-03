const registrBtn = document.querySelector('.header-sign-up');
const popupUp = document.querySelector('#popup-up');
const closedPopupUp = document.querySelector('.popup-sign-up__content');
const closedPopupOnLogo = document.querySelector('.popup-sign-up__img a img');

export const popupSignUp = () => {
    document.addEventListener('click', (event) => {
        const el = event.target;
        if (el === registrBtn){
            popupUp.classList.add('active');           
        } else if(el === closedPopupOnLogo || !el.closest('.popup-sign-up__content')){
            popupUp.classList.remove('active');
        }
    })
}