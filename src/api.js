// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'x-api-key':
//     'live_zHFebZByr5MT95LL79HO8n98KLXjkHMmP1yvgYlPDH5xs1LuljJJtWZCJqZ4WUZV',
// });

// var requestOptions = {
//   method: 'GET',
//   headers: headers,
//   redirect: 'follow',
// };

// fetch(
//   'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME',
//   requestOptions
// )
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const base_url = 'https://api.thecatapi.com';
//  / v1 / images / search ? limit = 10 & breed_ids=beng& api_key=live_zHFebZByr5MT95LL79HO8n98KLXjkHMmP1yvgYlPDH5xs1LuljJJtWZCJqZ4WUZV';

export function fetchCats() {
  return fetch(`${base_url}/v1/breeds?limit=10&page=0`).then(res => {
    if (!res.ok) throw new error(res.status);
    return res.json();
  });
}
