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
      <label for="language">Language/Tech</label>
      <select class="form-select" id="language" required>
        <option placeholder="Select A Language" selected></option>
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Enter Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="publique"
        ${obj.publique ? 'checked' : ''} checked>
        <label class="form-check-label" for="publique">Publique</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="privé"
        ${obj.privé ? 'checked' : ''}>
        <label class="form-check-label" for="privé">Privé</label>
      </div>
      <button type="submit" class="btn btn-success">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default vocabForm;
