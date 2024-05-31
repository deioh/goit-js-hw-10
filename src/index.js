import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
let cat;

breedSelect.addEventListener('change', event => {
  console.log('Change event occurred');
  const breedId = event.target.value;
  console.log(`Selected breed ID: ${breedId}`);

  cat = fetchCatByBreed(breedId);
  console.log('cat breed fetch', cat);
  cat_Info(breedId);
});

console.log('Starting fetchBreeds...');
fetchBreeds()
  .then(breeds => {
    console.log(`fetchBreeds successful. Received ${breeds.length} breeds`);
    const options = breeds
      .map(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        return option;
      })
      .forEach(option => {
        console.log(`Appending option ${option.textContent} (${option.value})`);
        breedSelect.appendChild(option);
      });
  })
  .catch(error => {
    console.error('Error fetchingBreeds:', error);
  });

function cat_Info(breedId) {
  console.log('Starting catinfo...');

  const test = Object.entries(cat).map([test.url, cat.url]);

  console.log('test', test);
}
// .then(breeds => {
//   console.log(`fetchBreeds successful. Received ${breeds.length} breeds`);
//   const options = breeds
//     .map(breed => {
//       const option = document.createElement('option');
//       option.value = breed.id;
//       option.textContent = breed.name;
//       return option;
//     })
//     .forEach(option => {
//       console.log(`Appending option ${option.textContent} (${option.value})`);
//       breedSelect.appendChild(option);
//     });
// })
// .catch(error => {
//   console.error('Error fetchingBreeds:', error);
// });
