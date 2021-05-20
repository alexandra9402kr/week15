function check() {
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    document.getElementById("errorMessage").innerHTML = "";

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML += "Введите имя<br>";
    }


    if (lastname.value == '') {
        document.getElementById("errorMessage").innerHTML += "Введите фамилию<br>";
    }

    if (email.value == '') {
        document.getElementById("errorMessage").innerHTML += "Введите почту<br>";
    }

    if (phone.value == '') {
        document.getElementById("errorMessage").innerHTML += "Введите телефон<br>";
    }

    if (password1.value == '') {
        document.getElementById("errorMessage").innerHTML += "Введите пароль<br>";
    }

    if (password1.value.length < 8) {
        document.getElementById("errorMessage").innerHTML += "Пароль слишком короткий<br>";
    }

    if (password2.value == '') {
        document.getElementById("errorMessage").innerHTML += "Повторите пароль<br>";
    }

    if (password1.value != password2.value) {
        document.getElementById("errorMessage").innerHTML += "Пароль не совпадает<br>";
    }

    if (document.getElementById("errorMessage").innerHTML =='') {
        alert ('Добро пожаловать, ' + name.value + ' '+ lastname.value + '!');
    }
}
