// Получает информацию о возрасте, если младше 18 лет, перенаправляет на другой сайт
function getAge() {
    let age = prompt("Пожалуйста, введите ваш возраст");

    if (age >= 18) {
        let now = new Date();
        alert("Приветствуем на LifeSpot " + now);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
    return age
}

// Получает информацию о сессии
function handleSession() {
    let session = {};

    if (sessionStorage.getItem("userAgent") != null) {
        session.userAgent = sessionStorage.getItem("userAgent");
    } else {
        session.userAgent = window.navigator.userAgent;
        sessionStorage.setItem("userAgent", session.userAgent);
    }

    if (sessionStorage.getItem("age") != null) {
        session.age = sessionStorage.getItem("age");
    } else {
        session.age = getAge();
        sessionStorage.setItem("age", session.age);
    }

    if (sessionStorage.getItem("startDate") != null) {
        session.startDate = sessionStorage.getItem("startDate");
    } else {
        session.startDate = new Date().toLocaleString();
        sessionStorage.setItem("startDate", session.startDate);
    }

    return session;
}

// Выводи информацию о сессии в консоль
function printSession() {
    for (let result in session) {
        console.log(session[result])
    }
}

// Фильтрует трансляции
function filterContent(inputData) {
    let inputText = inputData;
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let element = elements[i].getElementsByTagName('h3')[0].innerText;

        if (element.toLowerCase().includes(inputText)) {
            elements[i].style.display = 'inline-block';
        }
        else {
            elements[i].style.display = 'none';
        }
    }
}
