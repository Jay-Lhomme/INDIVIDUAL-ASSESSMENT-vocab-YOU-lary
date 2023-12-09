import {
  deleteVocab, getCSS, getHTML, getJavaScript, getSingleVocab, getVocab
} from '../api/vocabData';
import vocabForm from '../components/forms/vocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // DELETE VOCAB
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    // UPDATE VOCAB
    if (e.target.id.includes('update-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => vocabForm(vocabObj));
    }
  });

  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    // Filter Language
    if (e.target.id.includes('html-btn')) {
      getHTML(user.uid).then(showVocab);
    }

    if (e.target.id.includes('javascript-btn')) {
      getJavaScript(user.uid).then(showVocab);
    }

    if (e.target.id.includes('css-btn')) {
      getCSS(user.uid).then(showVocab);
    }

    if (e.target.id.includes('all-btn')) {
      getVocab(user.uid).then(showVocab);
    }
  });

  document.querySelector('#privé-buttons').addEventListener('click', (e) => {
    // Filter Language
    if (e.target.id.includes('html-privé-btn')) {
      getHTML(user.uid).then(showVocab);
    }

    if (e.target.id.includes('javascript-privé-btn')) {
      getJavaScript(user.uid).then(showVocab);
    }

    if (e.target.id.includes('css-privé-btn')) {
      getCSS(user.uid).then(showVocab);
    }

    if (e.target.id.includes('all-privé-btn')) {
      getVocab(user.uid).then(showVocab);
    }
  });
};

export default domEvents;
