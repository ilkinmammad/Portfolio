document.addEventListener("DOMContentLoaded", () => {

 let users = JSON.parse(localStorage.getItem("users"))

 let form = document.querySelector("form")

 form.addEventListener("submit",login)

 let username = document.querySelector("#username")
 let password = document.querySelector("#password")

 function login(e) {
    e.preventDefault()

    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    
    if (!usernameRegex.test(username.value)) {
        toast("Username 3-20 simvol arasinda olmali ...");
        return;
    }

    
    if (!passwordRegex.test(password.value)) {
        toast("Şifrə ən azi 8 simvol olmali...");
        return;
    }

    if (!users) {
        toast("User not found")
    }

    let isLoginedUser = users.find((user) => user.username == username.value && user.password == password.value
)
if (isLoginedUser) {
    isLoginedUser.isLogined= true
    localStorage.setItem("users" , JSON.stringify(users))
    toast("user login succefull")
    setTimeout(() => {
        window.location.href = "index.html"
    }, 2000);
} else{
    toast("username or password incorrect")
    return
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