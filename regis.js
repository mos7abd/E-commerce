function validateForm(event) {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    var emailInput = document.getElementById("email").value;
    var confirmPasswordInput = document.getElementById("confirmPassword").value;
    var emailRegex = /^[a-zA-Z]{1,20}\d{1,5}@(gmail\.com|yahoo\.com)$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,30}$/;
    var emailError = document.getElementById("emailError");
    var passwordErorr=document.getElementById("passwordErorr");
    var confirmPassword=document.getElementById("confirmPassword1");
    var emailRigisted=document.getElementById("emailRigisted");
  // هنا انا  قولتله لو الايميل والباسورد غلط يظهر رساله لليوزر يدخل ازاي
    emailError.style.display = "none"; 
    passwordErorr.style.display = "none";
    confirmPassword.style.display="none";
    emailRigisted.style.display="none";
    
    if (!emailRegex.test(emailInput) && !passwordRegex.test(passwordInput)) {
        emailError.style.display = "block";
        passwordErorr.style.display = "block";  
        event.preventDefault(); 
    }
    
//هنا لو الايميل بس اللي غلط
    if (!emailRegex.test(emailInput)) {
        emailError.style.display = "block";
        event.preventDefault();
        return; 
    }
    // هنا لو الباسورد بس اللي غلط
    if (!passwordRegex.test(passwordInput)) {
        passwordErorr.style.display = "block"; 
        event.preventDefault(); 
        return;
    }



// هنا لو الايميل والباسورد صح
    if (emailRegex.test(emailInput) && passwordRegex.test(passwordInput)) {
        // هيدخل يشوف هل كلمه السر متطابقه ولا لا لو مش متطابقه هيظهر رساله بانها مش متطابقه وهيوقف
        if (passwordInput != confirmPasswordInput) {
            confirmPassword.style.display = "block"; 
            event.preventDefault();
            return;
        }
//   لو اتاكد انها صح هيكمل  باقي الكود
 // هنا هيتم استرجاع البيانات الموجوده في ال local storage وتخزينها في stroredData
        var storedData = localStorage.getItem("userData");
        //هنا هنعمل array فاضيه علشان اخزن فيها البيانات
        var userData = [];
// هنا بشوف اذا كان في بيانات متخزنه ولا لا لو كان في بيانات متخزنه بحولها ل string
        if (storedData) {
            userData = JSON.parse(storedData);
            let isEmailExists = false;
            //هنا بتاكد هل الايميل موجود من قبل ام لا 
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].email === emailInput) {
                    isEmailExists = true;
                    break; 
                }
            }
                if (isEmailExists) {
                emailRigisted.style.display = "block"; 
                event.preventDefault();
                return;
            }
            }

        // هنا لو عدي واتاكد ان الايميل مكنش موجود واتاكد من كل حاجه هيضيف البيانات
        userData.push({
            username: usernameInput,
            email: emailInput,
            password: passwordInput
        });

        // قم بتحويل البيانات إلى سلسلة نصية JSON وحفظها في localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "home.html";
        alert("تم تسجيل الحساب بنجاح!");
       
    }  
}
