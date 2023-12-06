import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const vocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
      <label for="language">Language</label>
      <input type="url" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
    </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="privé" ${obj.privé ? 'checked' : ''}>
        <label class="form-check-label" for="privé">Privé</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default vocabForm;
