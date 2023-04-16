function saveText() {
    let inputText = document.getElementsByTagName('input')[0].value;

    alert('Вы ввели: ' + inputText + '\nРанее вы вводили: ' + this.lastText);

    this.lastText = inputText;
}