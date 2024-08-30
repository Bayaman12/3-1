document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    const email = document.getElementById("email").value;
    const messageElement = document.getElementById("emailMessage");

    if (validateEmail(email)) {
        messageElement.textContent = "Вы успешно зарагестрировались.";
        messageElement.className = "message success";
    } else {
        messageElement.textContent = "Не корректный формат почты.";
        messageElement.className = "message error";
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}