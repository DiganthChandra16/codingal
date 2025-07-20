function myfunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a*a;
}
function validate(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");

    let message = '';

    if (email === '') {
        message = 'please enter an email';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'password must be at  least 6 characters';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'age must be 12 to 50';
        msgbox.style.color = 'red';
    }
    else{

        message = 'login successful';
        msgbox.style.color = 'green';
    }
    msgbox.innerText = message;
}
