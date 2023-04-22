const input = document.querySelector('.text__hashtags');//относится к хештегу!
const inputComments = document.querySelector('.text__description');
//Отмена escape для хештегов и комментов
input.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
});
inputComments.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
});
//Валидация ##
//Проверка символов
function isEveryHashtagSymbolsValid(elem) {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return re.test(elem);
}
function isHashtagSymbolsValid() {
  const hashtags = input.value.toLowerCase().trim().split(' ');
  if (hashtags.every(isEveryHashtagSymbolsValid)) { return true; }
  else { return false; }
}

//Проверка колва
function isAmountValid() {
  const hashtags = input.value.toLowerCase().split(' ');
  if (hashtags.length <= 5) { return true; }
  else { return false; }
}
//Проверка уникальности
function areHashtagsUnique() {
  const hashtags = input.value.toLowerCase().trim().split(' ');
  const uniqueHashTagArray = new Set(hashtags);
  if (hashtags.length !== uniqueHashTagArray.size) {
    return false;
  }
  else { return true; }
}

function hashtagsValid(value) {
  const hashtags = value.toLowerCase().trim().split(' ');
  if (isAmountValid(hashtags) && areHashtagsUnique(hashtags) && isHashtagSymbolsValid(hashtags)) {
    return true;
  }
  else { return false; }
}
export{input,hashtagsValid};
