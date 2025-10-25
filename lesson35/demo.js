function handleContact() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var snackbar = document.getElementById("snackbar");
    var snackbarText = "";
    var snackbarBG = "#28a7e9";
    if (fullName === "" || email === "" || message === "") {
        snackbarText = "please enter values for all fields";
        snackbarBG = "rgb(255,204,203)";
    }
    else {
        snackbar.className = "show";
        snackbarText = "thanks ${fullName}... your message has been received!";
    }
    snackbar.className = "show";
    snackbar.innerHTML = snackbarText;
    snackbar.style.backgroundColor = snackbarBG;
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }  , 3000);  
}