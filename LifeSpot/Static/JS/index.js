﻿function handleSession() {
    let age = prompt("Пожалуйста, введите ваш возраст");

    if (age >= 18) {
        let now = new Date();
        alert("Приветствуем на LifeSpot " + now);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }

    let session = new Map();

    session.set('age', age)
    session.set('userAgent', window.navigator.userAgent);
    session.set('startDate', new Date().toLocaleString());

    return session;
}

function printSession(session) {
    for (let result of session) {
        console.log(result)
    }
}

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
