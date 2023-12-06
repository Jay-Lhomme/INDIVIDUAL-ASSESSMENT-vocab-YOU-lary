import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <i alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-vocab-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-vocab-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
     <p>${obj.desfinition || ''}</p>
     <hr>    
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
