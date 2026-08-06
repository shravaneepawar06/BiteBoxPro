function login()
{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log(email);

    // console.log(password);

    let error = document.getElementById("error");

    //simple condition
    if (email === "admin@1234" && password === "1234"){

        //Save login state in local storage
        localStorage.setItem("user", email);
        localStorage.setItem("userpassword", password);

        //Redirect
        window.location.href = "index.html";
    }
    else{
        error.innerText = "Invalid email or password";
    }
}

function togglePassword(){
    let passwordInput = document.getElementById("password");

    if(passwordInput.type === "password")
    {
        passwordInput.type = "text" ;
    }
    else{
        passwordInput.type = "password";
    }
}