import {generateDescription, PHOTOS_COUNT} from './data.js';
import {insertPhotoMiniature} from './miniatures.js';
import {showFileForm} from './form.js';

const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);
insertminiatures(descriptions);

document.querySelector('#upload-file').addEventListener('change', showFileForm);
