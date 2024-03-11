function validateLogin(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    emailError.style.display = "none";
    passwordError.style.display = "none";

    var storedData = localStorage.getItem("userData");
    var userData = JSON.parse(storedData);

    if (userData) {
        var validEmail = false;
        var validPassword = false;
        var isAdmin = false;
        var currentUser;

        for (let i = 0; i < userData.length; i++) {
            if (emailInput == userData[i].email) {
                validEmail = true;

                if (passwordInput == userData[i].password) {
                    validPassword = true;

                    if (emailInput.startsWith("admin")) {
                        isAdmin = true;
                    }
                    
                    break;
                }
            }
        }

        if (validEmail && validPassword) {
            
            localStorage.setItem('loggedUser', JSON.stringify({email: emailInput, password: passwordInput}));
            if (isAdmin) {
               
                window.location.href = "Admin.html";
            } else {
            
                
                window.location.href = "home.html";
            }
        } else {
           
            if (!validEmail) {
                emailError.style.display = "block";
            }
            if (!validPassword) {
                passwordError.style.display = "block";
            }
        }
    } else {
    
        emailError.style.display = "block";
    }
}

