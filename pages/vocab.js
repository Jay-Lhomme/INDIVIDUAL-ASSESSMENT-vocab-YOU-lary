import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#main-container', domString);
};

const showVocab = (array) => {
  clearDom();
  const btnString = `
  <div class="filter-Btns">
  <button class="btn btn-secondary" id="javascript-btn">JavaScript</button>
  <button class="btn btn-secondary" id="html-btn">HTML</button>
  <button class="btn btn-secondary" id="css-btn">CSS</button>
  <button class="btn btn-secondary" id="all-btn">All</button>
  </div>`;

  renderToDOM('#filter-buttons', btnString);

  // PRIVÉ BUTTONS
  // const privéString = `
  // <div class="privé-Btns">
  // <button class="btn btn-secondary" id="javascript-privé-btn">JavaScriptpr</button>
  // <button class="btn btn-secondary" id="html-privé-btn">HTMLpr</button>
  // <button class="btn btn-secondary" id="css-privé-btn">CSSpr</button>
  // <button class="btn btn-secondary" id="all-privé-btn">Allpr</button>
  // </div>`;

  // renderToDOM('#privé-buttons', privéString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
        <p class="card-text">${item.definition}</p>
        <button id="update-vocab-btn--${item.firebaseKey}" class="btn btn-info">EDIT</button>
        <button id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</button>
      </div>
      </div>`;
  });
  renderToDOM('#main-container', domString);
};

export { showVocab, emptyVocab };
