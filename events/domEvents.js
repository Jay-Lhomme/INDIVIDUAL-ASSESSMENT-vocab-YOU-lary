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

    // ADD VOCAB
    if (e.target.id.includes('add-vocab-btn')) {
      vocabForm();
    }

    // UPDATE VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => vocabForm(vocabObj));
    }
  });
};

export default domEvents;
