// Получает имя пользователя
let getName = () => { return prompt('Укажите ваше имя'); }

// Получает комментарий пользователя
let getCommit = () => { return prompt('Напишите комментарий'); }

// Получает согласие на отзыв о комментарии
let isGrade = () => { return confirm('Открыть доступ для оценки вашего комментария другими пользователями?'); }

// конструктор для комментария
const comm = function (getName, getCommit) {
    this.userName = getName(),
    this.text = getCommit(),
    this.date = new Date().toLocaleString()
}

// Формируем комментарий
const addCommit = () => {
    let commit = new comm(getName, getCommit)

    if (commit.userName == '' || commit.text == '' || commit.userName == null || commit.text == null) {
        alert('Имя или комментарий не могут быть пустыми');
        return;
    }

    if (isGrade()) {
        let grade = new Object(commit);
        grade.rate = 0;
        writeСommit(grade);
        return;
    }

    writeСommit(commit);
}

// Добавляем коментарий на страницу
const writeСommit = сommit => {
    let likeCounter = '';

    // Генерим идентификатор комментария.
    let commentId = getId();

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (сommit.hasOwnProperty('rate')) {
        likeCounter += `           <button id=${commentId} class="button-like" onclick="addLike(this.id)">❤️${сommit.rate}</button>   `;
    }

    // Запишем коментария
    document.getElementsByClassName('commit')[0].innerHTML += '    <div class="commit-text">\n' +
        `<p> <i> <b>${сommit.userName}</b>  ${сommit.date}${likeCounter}</i></p>` +
        `<p>${сommit.text}</p>` +
        '</div><hr>';
}

// Формируем случайное число из диапазона 0 - max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Создаем идентификатор для кнопки
function getId() {
    return getRandomInt(9999).toString() + '-' + getRandomInt(9999).toString() + '-' + getRandomInt(9999).toString();
}

// добавляем лайки
function addLike(id) {
    let textLike = document.getElementById(id).innerHTML;
    let countLikes = Number(textLike.replace('❤️', ''));
    document.getElementById(id).innerHTML = '❤️' + ++countLikes;
}