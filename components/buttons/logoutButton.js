import { signOut } from '../../utils/auth';

// GOOGLE LOGOUT BUTTON
const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Logout</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
