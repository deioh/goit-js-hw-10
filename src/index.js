const base_url = 'https://api.thecatapi.com/v1/breeds';

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
