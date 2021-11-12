function validate()   {
    var password1 = document.getElementById("password1").value
    var password2 = document.getElementById("password2").value
    if (password1 != password2){
        alert("Passwords do not match.")
    }
    else if (password1.length < 8 || password2.length < 8){
        alert("Password is not long enough.")
    }
    else {
        alert("Passwords match and are long enough!")
    }
}