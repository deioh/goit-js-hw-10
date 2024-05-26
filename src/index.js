import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_zHFebZByr5MT95LL79HO8n98KLXjkHMmP1yvgYlPDH5xs1LuljJJtWZCJqZ4WUZV';

axios
  .get('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

const selectEL = document.getElementsByClassName('breed-select');

selectEL.addEventListener('change', () => {
  //const value = event.target.value;
  //console.log('selectEL value');
  alert('select EL value');
});
