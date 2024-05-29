import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_zHFebZByr5MT95LL79HO8n98KLXjkHMmP1yvgYlPDH5xs1LuljJJtWZCJqZ4WUZV';

export async function fetchBreeds() {
  console.log('Fetching breeds...');
  const response = await axios.get('https://api.thecatapi.com/v1/breeds');
  console.log('Got response:', response);
  if (!response.ok) {
    console.error('Error fetching breeds:', response.status);
    throw new Error(response.status);
  }
  console.log('Successfully fetched breeds:', response.data);
  return response.data;
}

// -export function fetchBreeds() {
// -  return axios.fetch('https://api.thecatapi.com/v1/breeds').then(response => {
// -    if (response.ok) throw new Error(response.status);
// -    return response.json();
// -  });

// export async function fetchCatByBreed(breedId) {
//   try {
//     const response = await axios.get(
//       'https://api.thecatapi.com/v1/images/search',
//       {
//         params: {
//           breed_ids: breedId,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
