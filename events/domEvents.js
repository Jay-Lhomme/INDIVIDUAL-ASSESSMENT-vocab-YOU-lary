import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
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

  document.querySelector('#filter-buttons').addEventListener('click', () => {
    // Filter Language

  });
};

export default domEvents;
