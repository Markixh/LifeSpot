﻿let age = prompt("Пожалуйста, введите ваш возраст");
if (age >= 18) {
    let now = new Date();
    alert("Приветствуем на LifeSpot " + now);
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}