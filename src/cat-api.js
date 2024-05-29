console.log('start');
const base_url = 'https://api.thecatapi.com/v1/breeds';
const breed_url = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds() {
  console.log('Fetching breeds...');
  return fetch(base_url)
    .then(response => {
      console.log('Got response:', response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(breeds => {
      console.log('Successfully fetched breeds:', breeds);
      return breeds;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  console.log('Entering fetchCatByBreed');
  console.log('Fetching cat by breed...');
  console.log(`Fetching url: ${breed_url}?breed_ids=${breedId}`);
  return fetch(`${breed_url}?breed_ids=${breedId}`)
    .then(response => {
      console.log('Got response:', response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(cat => {
      console.log('Successfully fetched cat:', cat);
      return cat;
    })
    .catch(error => {
      console.error('Error fetching cat:', error);
      throw error;
    })
    .finally(() => {
      console.log('Exiting fetchCatByBreed');
    });
}
