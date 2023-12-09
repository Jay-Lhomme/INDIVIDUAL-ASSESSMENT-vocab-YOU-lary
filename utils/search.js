import renderToDOM from './renderToDOM';
import sampleData from './sample_data/vocab';

const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = sampleData.filter((item) => item.title.toLowerCase().includes(userInput)
    || item.language.toLowerCase().includes(userInput)
    || item.description.toLowerCase().includes(userInput));
  renderToDOM('#main-container', searchResult);
};

export default search;
