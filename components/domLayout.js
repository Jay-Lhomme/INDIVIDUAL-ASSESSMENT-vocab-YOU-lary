import renderToDOM from '../utils/renderToDOM';

const domLayout = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-buttons"></div>
  <div id="main-container"></div>
  <div id="form-container"></div>`;

  renderToDOM('#app', domString);
};

export default domLayout;
