const base_url = 'https://api.thecatapi.com';
//  / v1 / images / search ? limit = 10 & breed_ids=beng& api_key=live_zHFebZByr5MT95LL79HO8n98KLXjkHMmP1yvgYlPDH5xs1LuljJJtWZCJqZ4WUZV';

export function fetchCats() {
  return fetch(`${base_url}/v1/breeds?limit=10&page=0`).then(res => {
    if (!res.ok) throw new error(res.status);
    return res.json();
  });
}
