import iziToast from 'izitoast';

import pixabayApi from './js/pixabay-api';
import renderFunctions from './js/render-functions';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const searchButton = document.querySelector('.form-button');
searchButton.addEventListener('click', () => {
  renderFunctions.clearGallery();
  renderFunctions.showLoader();
  const searchInput = document.querySelector('.form-input');
  const searchText = searchInput.value;
  pixabayApi
    .getImagesByQuery(searchText)
    .then(response => {
      renderFunctions.hideLoader();

      if (response.data.hits.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      } else {
        renderFunctions.createGallery(response.data.hits);
      }
    })
    .catch(error => {
      console.error(error);
    });
});
