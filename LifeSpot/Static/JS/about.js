// Получает имя пользователя
let getName = () => { return prompt('Укажите ваше имя'); }

// Получает комментарий пользователя
let getCommit = () => { return prompt('Напишите комментарий'); }

// Получает согласие на отзыв о комментарии
let isGrade = () => { return confirm('Открыть доступ для оценки вашего комментария другими пользователями?'); }

// Добавляет коментарий пользователя на страницу
const addCommit = (getName, getCommit, isGrade) => {
    let commit = {
        userName: getName(),
        text: getCommit(),
        date: new Date().toLocaleString()
    }

    if (commit.userName == '' || commit.text == '') {
        alert('Имя и комментарий не могут быть пустым');
        return;
    }

    if (isGrade()) {
        let grade = new Object(commit);
        grade.rate = 0;
        writeReview(grade);
        return;
    }

    writeReview(commit);
}

const writeReview = review => {
    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    // Запишем результат
    document.getElementsByClassName('commit')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}