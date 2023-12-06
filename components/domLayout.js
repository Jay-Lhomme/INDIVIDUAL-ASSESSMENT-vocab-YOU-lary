import renderToDOM from '../utils/renderToDOM';

const domLayout = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="store"></div>
  <div id="view"></div>`;

  renderToDOM('#app', domString);
};

export default domLayout;
