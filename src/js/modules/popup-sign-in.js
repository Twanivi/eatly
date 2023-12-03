const loginBtn = document.querySelector('.header-login');
const popupIn = document.querySelector('#popup-in');
const closedPopupIn = document.querySelector('.popup-sign-in__content');
const closedPopup = document.querySelector('.popup-sign-in__img a img');
const btnSignIn = document.querySelector('.popup-sign-in__inside');
const emailSignIn = document.querySelector('.popup-sign-in__email');
const passSignIn = document.querySelector('.popup-sign-in__password');

export const popupLogin = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        if (element === loginBtn){
            popupIn.classList.add('active');
        } else if(element === closedPopup || !element.closest('.popup-sign-in__content')){
            popupIn.classList.remove('active');
        }
    })
}

const validMail = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const valid = re.test(emailSignIn.value);
    if (valid) {
        output = 'Email address entered correctly!';
    } else {
        output = 'Email address entered incorrectly!';
        emailSignIn.value = output;
        
    }
    return valid;
}

const validPassword = () => {
    let regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/i;
    let validPass = regularExpression.test(passSignIn.value);
    if(!validPass) {
        output = 'password should contain atleast one number and one special character';
        emailSignIn.value = output;
        return false;
    } else {
        output = 'password entered correctly!';
    }
    return validPass;
}

export const submitSignIn = () => {
    btnSignIn.addEventListener('submit', (e) => {
        e.preventDefault();
        return (validMail() && validPassword());
    })
}


