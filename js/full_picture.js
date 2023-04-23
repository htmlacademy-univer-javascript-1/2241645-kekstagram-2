import {getCloseListers} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const [closeBigPicture, closeEscape] = getCloseListers(bigPicture, closeButton);

const avatarImageSize = 35;

function createBigPicture({url, likes, description, comments}){
  bigPicture.querySelector('.big-picture__img').children[0].src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  const commentsFragment = document.createDocumentFragment();
  for (const {avatar, message, name} of comments){
    const listElem = document.createElement('li');
    listElem.classList.add('social__comment');
    const avatarImg = document.createElement('img');
    avatarImg.classList.add('social__picture');
    avatarImg.src = avatar;
    avatarImg.alt = name;
    avatarImg.width = avatarImageSize;
    avatarImg.height = avatarImageSize;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = message;
    listElem.appendChild(avatarImg);
    listElem.appendChild(commentText);
    commentsFragment.appendChild(listElem);
  }
  bigPicture.querySelector('.social__comments').replaceChildren(commentsFragment);
  bigPicture.querySelector('.social__caption').textContent = description;
}

export function showBigPicture(picture){
  createBigPicture(picture);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', closeEscape);
  closeButton.addEventListener('click', closeBigPicture);
}
