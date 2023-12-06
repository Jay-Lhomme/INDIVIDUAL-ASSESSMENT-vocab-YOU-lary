import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domLayout from '../components/domLayout';
import navBar from '../components/navbar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocab';

const startApp = (user) => {
  domLayout();
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
