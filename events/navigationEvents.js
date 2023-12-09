import { getVocab, privéVocab } from '../api/vocabData';
import vocabForm from '../components/forms/vocabForm';
import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#privé-btn').addEventListener('click', () => {
    privéVocab(user.uid).then(showVocab);
  });

  document.querySelector('#add-vocab-btn').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      vocabForm();
    }
  });
};

export default navigationEvents;
