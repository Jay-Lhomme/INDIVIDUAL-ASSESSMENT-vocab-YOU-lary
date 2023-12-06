import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Some Vocab</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
        <p class="card-text">${item.definition}</p>
        <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
