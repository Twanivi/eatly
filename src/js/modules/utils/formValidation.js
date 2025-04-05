//показ ошибки под input
function showError(input, message) {
    const errorDiv = input.closest(".form-element")?.querySelector(".error");
    if (!errorDiv) return;
    errorDiv.textContent = message;
    input.classList.add("input-error");
}

//очистка ошибки 
function clearError(input) {
const errorDiv = input.closest(".form-element")?.querySelector(".error");
if (!errorDiv) return;
errorDiv.textContent = "";
input.classList.remove("input-error");
}

function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

export { showError, clearError, isValidEmail };