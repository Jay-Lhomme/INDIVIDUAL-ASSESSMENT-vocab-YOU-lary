const clearDom = () => {
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#privé-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
