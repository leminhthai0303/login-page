function checkForm() {
    var firstName = document.getElementById('firstname')
    var lastName = document.getElementById('lastname')
    var email = document.getElementById('email')
    var phoneNumber = document.getElementById('phonenumber')
    var password = document.getElementById('password')
    var confirmPassword = document.getElementById('confirmPassword')

    if (firstName.value == "" || lastName.value == "" || email.value == "" ||
    phoneNumber.value == ""  || password.value == "" || confirmPassword.value == "") {
        alert('Fill your form')
        return false
    }
    else if (password.value != confirmPassword.value){
        alert('Passwords are not the same')
        return false
    }
    else {
        alert('Sign up success')
        location.reload()
    }

}