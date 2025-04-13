document.addEventListener("DOMContentLoaded", ()=> {

    let form = document.querySelector("form")

    let name = document.querySelector("#name")
    let username = document.querySelector("#username")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let confirmpassword = document.querySelector("#confirmpassword")

    form.addEventListener("submit" , register)
    
    let users = JSON.parse(localStorage.getItem("users")) || []

    function register(e) {
    e.preventDefault()
    let uniqueUser = users.some((user) => user.username == username.value || user.email == email.value);

    let id = uuidv4();

    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    
    if (!usernameRegex.test(username.value)) {
        toast("Username 3-20 simvol arasinda olmali ...");
        return;
    }
    if (!emailRegex.test(email.value)) {
        toast("Email düzgün formatda deyil (məsələn, user@example.com)");
        return;
    }
    
    if (!passwordRegex.test(password.value)) {
        toast("Şifrə ən azi 8 simvol olmali...");
        return;
    }

    if (password.value !== confirmpassword.value) {
        toast("Şifrə tekrari eyni deyil");
        return;
    }


    if (!uniqueUser) {
        let newUser = {
            name: name.value, 
            username: username.value,
            email: email.value,
            password: password.value,
            confirmpassword: confirmpassword.value,
            isLogined: false ,
            id
        }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        toast("Register Succesfull")
        setTimeout(() => {
        window.location.href = "login.html"
        }, 2000);
    } else{
        toast("Giris olunmadi")
    }
    }



    let toast =(text) => {
        Toastify({
            text: `${text}`,
            duration: 2000,
            position: "left", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();
    }
    
})



