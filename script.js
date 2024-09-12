document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pass");
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();  
        let email = emailInput.value;
        let password = passwordInput.value;
        let valid = true;

        if (!validateEmail(email)) {
            alert("Please enter a valid email with '@' and '.'.");
            valid = false;  
        } else if (!validatePassword(password)) {  
            alert("Password must contain at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
            valid = false;  
        }

       
        if (valid) {
            alert("Form successfully submitted.");
            form.submit(); 
        }
    });

   
    function validateEmail(email) {
        
        if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")) {
            return true;
        }
        return false;
    }

   
    function validatePassword(password) {
        
        if (password.length < 8) {
            return false;
        }

        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumber = false;
        let hasSpecialChar = false;
        let specialChars = "@$!%*?&";

       
        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            if (char >= 'A' && char <= 'Z') {
                hasUpperCase = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLowerCase = true;
            } else if (char >= '0' && char <= '9') {
                hasNumber = true;
            } else if (specialChars.includes(char)) {
                hasSpecialChar = true;
            }
        }

     
        if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
            return true;
        }

        return false;
    }
});
