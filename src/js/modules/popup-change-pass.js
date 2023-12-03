const forgetPass = document.querySelector('.popup-sign-in__forget');
const popupChange = document.querySelector('#popup-change-pass');
const closedPopupChange = document.querySelector('.popup-change__content');
const closedLogoPopup = document.querySelector('.popup-change__img a img');

export const changePass = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        if (element === forgetPass){
            popupChange.classList.add('active');
        } else if(element === closedLogoPopup || !element.closest('.popup-change__content')){
            popupChange.classList.remove('active');
        }
    })
}