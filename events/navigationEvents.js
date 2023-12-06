import { getVocab } from '../api/vocabData';
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
};

export default navigationEvents;
